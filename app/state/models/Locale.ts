interface BaseLocale {
    id: string
    label: string
}

interface Locale extends BaseLocale {
    direction?: 'rtl' | 'ltr'
    Home: {
        hero: {
            motto0: {
                sentence: string
                words: [string, string, ...string[]]
            }
            motto: string
            title: string
            description: string
        }
        about: string
    }
    Navbar: {
        home: string
        about: string
        services: string
        contact: string
    }
}

export { Locale as LocaleModel, BaseLocale as BaseLocaleModel }
