from flask import Response, render_template, request, session
from werkzeug.exceptions import HTTPException

from .locale import DEFAULT_LOCALE, LOCALES, LOCALES_LIST


def home():
    return render_template('home.html')


def contact():
    return render_template('contact.html')


def about():
    return render_template('about.html')


def locales_list():
    return LOCALES_LIST


def get_locale():
    # basicly: locale from request OR locale from session OR DEFAULT_LOCALE
    session_locale = session.get('locale', DEFAULT_LOCALE)
    locale = request.args.get('locale', session_locale)
    data = LOCALES.get(locale)

    # if requested locale is not defined we use the default one
    if data is None:
        data = LOCALES[DEFAULT_LOCALE]
    else:
        session['locale'] = locale

    return data


def robots_txt():

    content = (
        'User-Agent: *\n'
        'Disallow: /admin/\n'
        'Allow: /\n\n'
        f'Sitemap: {request.host_url}sitemap.xml'
    )

    return Response(content, content_type='text/plain')


def errors(error: HTTPException):
    locale = session.get('locale', DEFAULT_LOCALE)
    content = LOCALES[locale]['errors']
    direction = LOCALES[locale].get('direction')
    code = str(error.code)
    base = {
        'code': code,
        'locale_dir': direction,
        'button_404': content['button_404']
    }

    if code in content:
        context = {**content[code], **base}
    else:
        context = {
            'title': error.name,
            'description': error.description,
            **base
        }

    return render_template('error.html', error=context), error.code
