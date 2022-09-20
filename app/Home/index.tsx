import React, { FC } from 'react'

import About from './About'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Selling from './Selling'

import './style/home.scss'

const Home: FC = () => {
    return (
        <main className='home-container'>
            <HeroSection />
            <About />
            <Selling />
            <Contact />
        </main>
    )
}

export default Home
