
from logging.config import dictConfig

from flask import Flask

from server import send_contact, views


dictConfig({
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            'format': (
                ('-' * 50) + '\n{asctime}\n'
                '{levelname}:{name}\n'
                '{message}\n'
            ),
            'style': '{',
        },
    },
    'handlers': {
        'error_file': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': 'error.log',
            'formatter': 'default'
        },
        'requests': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': 'requests.log',
            'formatter': 'default'
        },
    },
})


app = Flask(__name__, static_folder='static')


app.get('/')(views.home)
app.get('/contact/')(views.contact)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/')(views.get_locale)
app.post('/api/send_contact/')(send_contact)


# errors
app.register_error_handler(404, views.errors)
