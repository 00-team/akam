import React, { FC } from 'react'

import About from './About'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Selling from './Selling'

import './style/home.scss'

const Home: FC = () => {
    return (
        <div className='home-container'>
            <HeroSection />
            <About />
            <Selling />
            <Contact />
        </div>
    )
}

export default Home
