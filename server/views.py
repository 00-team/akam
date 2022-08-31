from flask import abort, render_template, request
from werkzeug.exceptions import HTTPException

from .locale import DEFAULT_LOCALE, LOCALES, LOCALES_LIST


def home():
    return render_template('home.html')


def locales_list():
    return LOCALES_LIST


def get_locale():
    locale = request.args.get('locale', DEFAULT_LOCALE)
    data = LOCALES.get(locale)

    if data is None:
        data = LOCALES.get(DEFAULT_LOCALE)

    return data


def errors(error: HTTPException):

    context = {
        'code': error.code,
        'title': error.name,
        'description': error.description,
    }

    return render_template('error.html', error=context), error.code
