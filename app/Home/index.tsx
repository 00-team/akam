import React, { FC } from 'react'

import AboutUs from './AboutUs'
import HeroSection from './HeroSection'

import './style/home.scss'

const Home: FC = () => {
    return (
        <div className='home-container'>
            {/* sections */}
            <HeroSection />

            <AboutUs />
        </div>
    )
}

export default Home
