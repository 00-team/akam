import json
from logging.config import dictConfig
from pathlib import Path

from flask import Flask
from flask_mail import Mail


BASE_DIR = Path(__file__).parent.parent
DATABASE_DIR = BASE_DIR / 'database'
DOOM_PATH = DATABASE_DIR / 'doom.json'

if not DOOM_PATH.is_file():
    with open(DOOM_PATH, 'w') as f:
        json.dump({}, f)

with open(DATABASE_DIR / 'secrets.json') as f:
    SECRETS = json.load(f)

MAIL_SENDER = SECRETS['G-MAIL']['USERNAME']
MAIL_CONFIG = {
    'MAIL_SERVER': 'smtp.gmail.com',
    'MAIL_PORT': 465,
    'MAIL_USE_TLS': False,
    'MAIL_USE_SSL': True,
    'MAIL_USERNAME': MAIL_SENDER,
    'MAIL_PASSWORD': SECRETS['G-MAIL']['PASSWORD']
}


app = Flask(
    __name__,
    static_folder=BASE_DIR / 'static',
    template_folder=BASE_DIR / 'templates'
)
app.secret_key = SECRETS['APP_SECERT_KEY']
app.config.update(MAIL_CONFIG)

mail = Mail(app)


dictConfig({
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            # 'format': (
            #     '{asctime}:{levelname}:{name}\n'
            #     '{message}\n'
            # ),
            'format': (
                ('-' * 50) + '\n{asctime}\n'
                '{levelname}:{name}\n'
                '{message}\n'
            ),
            'style': '{',
        },
    },
    'handlers': {
        'warn': {
            'level': 'WARN',
            'filename': 'warn.log',
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'default',
            'maxBytes': 7*1024*1024,
            'backupCount': 1
        },
        'debug': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': 'debug.log',
            'formatter': 'default',
            'maxBytes': 12*1024*1024,
            'backupCount': 1
        },
    },
    'loggers': {
        'warn': {
            'level': 'WARN',
            'handlers': ['warn']
        },
        'debug': {
            'level': 'DEBUG',
            'handlers': ['debug']
        }
    },
    'root': {
        'level': 'WARN',
        'handlers': ['warn']
    }
})
