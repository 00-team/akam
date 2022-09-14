import logging
import time

from flask import request, session

from .shared import DATABASE_DIR, SECRETS
from .utils import InvalidCaptcha, contact_hook, get_user_ip, verify_captcha


# 30min
CONTACT_TIMEOUT = 30 * 60


class SendTimeout(Exception):
    pass


logger = logging.getLogger('debug')
logger.name = __name__


def send_contact():
    data = request.json
    user_ip = get_user_ip(request)

    try:
        recaptcha = data['recaptcha']

        first_name = data['first_name']  # 0-50
        last_name = data['last_name']  # 0-50
        email = data['email']  # 0-250
        message = data['message']  # 20-500

        if (
            len(first_name) > 50 or
            len(last_name) > 50 or
            len(email) > 250 or
            len(message) < 20 or
            len(message) > 500
        ):
            raise ValueError

        verify_captcha(recaptcha, user_ip)

    except (KeyError, ValueError):
        return {'error': {'message': 'invalid request data', 'code': 400}}, 400

    except (InvalidCaptcha, AttributeError):
        return {'error': {'message': 'invalid captcha', 'code': 400}}, 400

    now = int(time.time())

    try:
        session_contact = session.get('contact')
        if session_contact is not None:
            if session_contact['timeout'] > now:
                raise SendTimeout
        else:
            session['contact'] = {
                'timeout': now + CONTACT_TIMEOUT,
                'user_ip': user_ip,
                'email': email
            }

    except SendTimeout:
        return {'error': {'message': 'dont spam', 'code': 400}}, 400

    contact_hook(first_name, last_name, email, message)

    return {'ok': 12}
