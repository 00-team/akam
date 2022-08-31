import React, { FC } from 'react'

import HeroSection from './HeroSection'
import AboutUs from './aboutUs'

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
