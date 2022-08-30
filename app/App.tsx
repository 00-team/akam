import React, { FC } from 'react'

import loadable from '@loadable/component'
import Navbar from 'layout/Navbar'
import { Route, Routes } from 'react-router-dom'

import './style/base.scss'
import './style/fonts/imports.scss'

const Home = loadable(() => import('Home'))

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </>
    )
}

export default App
