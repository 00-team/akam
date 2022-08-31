import json
from pathlib import Path

from .shared import BASE_DIR


LOCALE_DIR = BASE_DIR / 'locale'
DEFAULT_LOCALE = 'en'


def load_locales(paths: list[Path]):
    locales = {}
    locales_list = []

    for path in paths:
        with open(path) as f:
            data = json.load(f)

        locale_id = path.name[:-5]
        label = data['label']
        content = data['content']
        direction = data.get('direction', 'ltr')

        if not direction in ['rtl', 'ltr']:
            raise ValueError((
                f'invalid direction: {direction} in {path.name}.\n            '
                f'possible values are "rtl" & "ltr"'
            ))

        base = {
            'id': locale_id,
            'label': label,
        }

        locales_list.append(base)
        locales[locale_id] = {
            **base,
            'content': content
        }

    if not DEFAULT_LOCALE in locales:
        raise ValueError('default locale is not in the locales!')

    return locales, locales_list


def get_locales():
    locales = LOCALE_DIR.glob('*.json')
    locales = filter(lambda p: p.is_file(), locales)
    return load_locales(list(locales))


LOCALES, LOCALES_LIST = get_locales()
