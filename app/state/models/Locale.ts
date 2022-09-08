interface LocalesList {
    id: string
    label: string
}

type Description = string | string[]

interface Colored {
    sentence: string
    word: string
}

interface AboutCard {
    title: string
    description: Description
}

interface SellingCard extends AboutCard {}

interface Locale {
    label: string
    direction?: 'rtl' | 'ltr'
    Navbar: {
        home: string
        about: string
        services: string
        contact: string
    }
    Home: {
        hero: {
            motto: {
                sentence: string
                words: [string, string, ...string[]]
            }
            title: Colored
            description: Description
            buttons: {
                about: Colored
                collaboration: string
            }
        }
        about: {
            doom: Colored
            title: string
            trust: AboutCard
            trust2: AboutCard
            trust3: AboutCard
            innovation: AboutCard
            card_button: string
        }
        selling: {
            doom: Colored
            title: string
            marketing: SellingCard
            marketing2: SellingCard
            business_strategy: SellingCard
            card_button: string
        }
    }
}

export { Locale as LocaleModel, LocalesList as LocalesListModel }
export {
    Description as DescriptionModel,
    Colored as ColoredModel,
    AboutCard as AboutCardModel,
    SellingCard as SellingCardModel,
}
