import React, { FC, useEffect } from 'react'

import { Empty } from '@00-team/utils'

import loadable from '@loadable/component'
import { Footer, Navbar } from 'layout'
import { Route, Routes } from 'react-router-dom'

import { useAtom, useSetAtom } from 'jotai'
import { LocaleAtom, LocalesListAtom } from 'state'

import { Loading } from 'components'

import './style/base.scss'

const Home = loadable(() => import('Home'))
const Contact = loadable(() => import('Contact'))
const About = loadable(() => import('About'))
const Selling = loadable(() => import('Selling'))

const App: FC = () => {
    const [Locale, UpdateLocale] = useAtom(LocaleAtom)
    const UpdateLocalesList = useSetAtom(LocalesListAtom)

    useEffect(() => {
        UpdateLocale()
        UpdateLocalesList()
    }, [])

    useEffect(() => {
        if (Locale.direction) {
            const right = Locale.direction === 'rtl'
            document.body.style.direction = right ? 'rtl' : 'ltr'
            document.body.style.textAlign = right ? 'right' : 'left'
        } else {
            document.body.style.direction = ''
            document.body.style.textAlign = ''
        }
    }, [Locale])

    if (Empty(Locale)) return <Loading />

    return (
        <>
            <Navbar />
            <MainContent />
            <Footer />
        </>
    )
}

const MainContent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='selling' element={<Selling />} />
        </Routes>
    )
}

export default App
