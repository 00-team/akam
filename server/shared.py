import json
from logging.config import dictConfig
from pathlib import Path


BASE_DIR = Path(__file__).parent.parent
DATABASE_DIR = BASE_DIR / 'database'
DOOM_PATH = DATABASE_DIR / 'doom.json'

if not DOOM_PATH.is_file():
    with open(DOOM_PATH, 'w') as f:
        json.dump({}, f)

with open(DATABASE_DIR / 'secrets.json') as f:
    SECRETS = json.load(f)


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
    }
})
