import React from 'react'

import AboutHeader from './AboutHeader'

import './style/about.scss'

const About = () => {
    return (
        <div className='about-page-container'>
            <AboutHeader />
            <section className='about-wrapper'>
                <section className='about-creators'>
                    <header className='creators-title title_hero'>
                        <div className='header-wrapper'>
                            دستندرکاران{' '}
                            <span className='colored-word'>آکام</span>
                        </div>
                    </header>
                </section>
            </section>
        </div>
    )
}

export default About
