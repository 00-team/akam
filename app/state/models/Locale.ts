interface BaseLocale {
    id: string
    label: string
}

interface Locale extends BaseLocale {
    direction: 'ltr' | 'rtl'
    content: {}
}

export { Locale as LocaleModel, BaseLocale as BaseLocaleModel }
