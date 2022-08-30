import json
from pathlib import Path

from .shared import BASE_DIR


LOCALE_DIR = BASE_DIR / 'locale'


def load_locales(paths: list[Path]):
    locales = {}
    locales_list = []

    for path in paths:
        with open(path) as f:
            data = json.load(f)

        locale_id = path.name[:-5]
        label = data['label']
        content = data['content']

        base = {
            'id': locale_id,
            'label': label,
        }

        locales_list.append(base)
        locales[locale_id] = {
            **base,
            'content': content
        }

    return locales, locales_list


def get_locales():
    locales = LOCALE_DIR.glob('*.json')
    locales = filter(lambda p: p.is_file(), locales)
    return load_locales(list(locales))


LOCALES, LOCALES_LIST = get_locales()
