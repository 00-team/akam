import React, { FC } from 'react'

import HeroSection from './HeroSection'

import './style/home.scss'

const Home: FC = () => {
    return (
        <div className='home-container'>
            {/* sections */}
            <HeroSection />
        </div>
    )
}

export default Home
