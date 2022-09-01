import React, { FC } from 'react'

import AboutUs from './AboutUs'
import HeroSection from './HeroSection'
import Services from './Services'

import './style/home.scss'

const Home: FC = () => {
    return (
        <div className='home-container'>
            <HeroSection />
            <AboutUs />
            <Services />
        </div>
    )
}

export default Home
