import React, { FC } from 'react'

import loadable from '@loadable/component'
import Navbar from 'layout/Navbar'
import { Route, Routes } from 'react-router-dom'

import './style/base.scss'
import './style/fonts/imports.scss'

const Home = loadable(() => import('Home'))
const ErrorPage = loadable(() => import('layout/Error'))

const App: FC = () => {
    return (
        <>
            <Navbar />
            <MainContent />
        </>
    )
}

const MainContent: FC = () => {
    if (typeof ERROR !== 'undefined') return <ErrorPage {...ERROR} />

    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default App
