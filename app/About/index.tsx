import React from 'react'

import AboutCard from './AboutCard'
import AboutHeader from './AboutHeader'

import './style/about.scss'

const About = () => {
    return (
        <div className='about-page-container'>
            <AboutHeader />
            <section className='about-wrapper'>
                <div className='about-creators'>
                    <header className='creators-title title_hero'>
                        <div className='header-wrapper'>
                            دستندرکاران{' '}
                            <span className='colored-word'>آکام</span>
                        </div>
                    </header>
                    <div className='creators-wrapper'>
                        <AboutCard
                            title='صدرا تقوی'
                            role='برنامه نویس'
                            motto='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از مجیطراحی اساسا مورد استفاده قرار گیرد.'
                        />
                        <AboutCard
                            title='صدرا تقوی'
                            role='برنامه نویس'
                            motto='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از مجیطراحی اساسا مورد استفاده قرار گیرد.'
                        />
                        <AboutCard
                            title='صدرا تقوی'
                            role='برنامه نویس'
                            motto='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از مجیطراحی اساسا مورد استفاده قرار گیرد.'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
