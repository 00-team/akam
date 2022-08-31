import axios from 'axios'

import { atom } from 'jotai'
import { BaseLocaleModel, LocaleModel } from 'state'

const Locale = atom<LocaleModel | 'loading'>('loading')
const LocalesList = atom<BaseLocaleModel[]>([])

const LocaleAtom = atom(
    get => get(Locale),
    async (_, set, locale: string | undefined) => {
        let params = {}

        if (locale) {
            localStorage.locale = locale
            params = { locale }
        } else if (localStorage.locale) {
            params = { locale: localStorage.locale }
        }

        const { data } = await axios.get('/api/get_locale/', { params })

        if (data.id !== localStorage.locale) {
            localStorage.locale = data.id
        }

        set(Locale, data)
    }
)

const LocalesListAtom = atom(
    get => get(LocalesList),
    async (_, set) => {
        const { data } = await axios.get('/api/locales_list/')
        set(LocalesList, data)
    }
)

export { LocaleAtom, LocalesListAtom }
