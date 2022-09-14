import React from 'react'

import AboutCreators from './AboutCreators'
import AboutHeader from './AboutHeader'
import AboutStory from './AboutStory'

import './style/about.scss'

const About = () => {
    return (
        <div className='about-page-container'>
            <AboutHeader />
            <section className='about-wrapper'>
                <AboutCreators />
                <AboutStory />
            </section>
        </div>
    )
}

export default About
