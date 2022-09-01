import json
from pathlib import Path

from jsonschema import validate

from .shared import BASE_DIR


LOCALE_DIR = BASE_DIR / 'locale'
DEFAULT_LOCALE = 'en'


def get_schema():
    with open(LOCALE_DIR / 'schema.json') as f:
        return json.load(f)


def load_locales(paths: list[Path]):
    locales = {}
    locales_list = []
    schema = get_schema()

    for path in paths:
        with open(path, encoding='utf-8') as f:
            data = json.load(f)

        validate(data, schema)

        locale_id = path.name[:-5]

        locales_list.append({
            'id': locale_id,
            'label': data['label'],
        })

        locales[locale_id] = {
            'id': locale_id,
            **data,
        }

    if not DEFAULT_LOCALE in locales:
        raise ValueError('default locale is not in the locales!')

    return locales, locales_list


def get_locales():
    files = LOCALE_DIR.glob('*.json')
    locales = filter(lambda p: p.is_file() and p.name != 'schema.json', files)
    return load_locales(list(locales))


LOCALES, LOCALES_LIST = get_locales()
