import React from 'react'

import AboutCard from './AboutCard'

const AboutCreators = () => {
    return (
        <div className='about-creators'>
            <header className='creators-title title_hero'>
                <div className='header-wrapper'>
                    دستندرکاران <span className='colored-word'>آکام</span>
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
    )
}

export default AboutCreators
