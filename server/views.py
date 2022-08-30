

from flask import abort, render_template
from werkzeug.exceptions import HTTPException

from .locale import LOCALES, LOCALES_LIST


def home():
    return render_template('home.html')


def locales_list():
    return LOCALES_LIST


def get_locale(locale: str):
    data = LOCALES.get(locale)

    if data is None:
        abort(404)

    return data


def errors(error: HTTPException):

    context = {
        'code': error.code,
        'title': error.name,
        'description': error.description,
    }

    return render_template('error.html', error=context)
