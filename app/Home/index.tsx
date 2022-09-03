import React, { FC } from 'react'

import AboutUs from './AboutUs'
import HeroSection from './HeroSection'
import Selling from './Selling'

import './style/home.scss'

const Home: FC = () => {
    return (
        <div className='home-container'>
            <HeroSection />
            <AboutUs />
            <Selling />
        </div>
    )
}

export default Home
