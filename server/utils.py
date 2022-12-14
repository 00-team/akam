import logging
from collections.abc import Iterable
from datetime import datetime
from threading import Thread
from time import sleep

from flask import Markup, Request
from httpx import post

from .shared import SECRETS, app


logger = logging.getLogger('warn')
logger.name = __name__

HR = '\n' + ('-' * 50) + '\n'
USERNAME = 'Akam'
AVATAR = 'https://cdn.discordapp.com/attachments/731174051170746500/814603567704047646/00_logo_f27.png'


@app.template_global('description')
def description(text: str | list):

    if isinstance(text, str) and len(text.split('\n')) > 1:
        text = text.split('\n')

    if isinstance(text, str):
        return text

    base = '<span class="description-line">{}</span>'
    return Markup(''.join(
        map(lambda l: base.format(l if l else '<br />'), text)
    ))


class InvalidCaptcha(Exception):
    pass


def get_user_ip(request: Request):
    access_route = request.access_route

    if len(access_route) > 0:
        return access_route[-1]


def verify_captcha(token, user_addr=None):
    data = {
        'secret': SECRETS['G-CAPTCHA']['secret'],
        'response': token
    }

    if user_addr:
        data['remoteip'] = user_addr

    response = post('https://google.com/recaptcha/api/siteverify', params=data)
    response_json = response.json()

    if not response_json.get('success'):
        raise InvalidCaptcha


def execute_hook(url: str, data: dict, timeout=0):
    try:
        if timeout:
            sleep(timeout)

        res = post(url, json=data)

        if res.status_code == 429:
            res = res.json()
            retry_after = int(res['retry_after'])
            return execute_hook(url, data, timeout=retry_after)

    except Exception as e:
        logger.exception(e)


def hook(url, embeds):
    data = {'username': USERNAME, 'avatar_url': AVATAR, 'embeds': embeds}

    if isinstance(url, str):
        Thread(target=execute_hook, args=(url, data)).start()

    elif isinstance(url, Iterable):
        for u in url:
            Thread(target=execute_hook, args=(u, data)).start()


def contact_hook(fname, lname, email, phone, company, platforms, message):

    description = (
        f'**First Name**: ||{fname}||{HR}'
        f'**Last Name**: ||{lname}||{HR}'
        f'**Email**: ||`{email}`||{HR}'
        f'**Phone**: ||`{phone}`||{HR}'
        f'**Company**: ||`{company}`||{HR}'
        f'**Platforms**: {platforms}{HR}'
        f'**Message**: \n||{message}||'
    )

    embed = {
        'title': 'Contact',
        'color': 5347839,
        'timestamp': str(datetime.now()),
        'description': description,
    }

    hook(SECRETS['WEBHOOKS']['Contact'], [embed])
