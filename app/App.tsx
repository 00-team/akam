import React, { FC, useEffect } from 'react'

import { Empty } from '@00-team/utils'

import loadable from '@loadable/component'
import About from 'About'
import Selling from 'Selling'
import Footer from 'layout/Footer'
import Navbar from 'layout/Navbar'
import { Route, Routes } from 'react-router-dom'

import { useAtom, useSetAtom } from 'jotai'
import { LocaleAtom, LocalesListAtom } from 'state'

import { Loading } from 'components'

import './style/base.scss'
import './style/fonts/imports.scss'

const Home = loadable(() => import('Home'))
const Contact = loadable(() => import('Contact'))
const ErrorPage = loadable(() => import('layout/Error'))

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
    if (typeof ERROR !== 'undefined') return <ErrorPage {...ERROR} />

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
