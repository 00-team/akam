interface BaseLocale {
    id: string
    label: string
}

type Description = string | string[]

interface Locale extends BaseLocale {
    direction?: 'rtl' | 'ltr'
    Home: {
        hero: {
            motto: {
                sentence: string
                words: [string, string, ...string[]]
            }
            title: {
                sentence: string
                company: string
            }
            description: Description
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
