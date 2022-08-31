import React from 'react'

import aboutSvg from '../../static/svgs/about.svg'

import './style/aboutus.scss'

const AboutUs = () => {
    return (
        <section className='about-container' id='about'>
            <div className='about-wrapper'>
                <div className='about-title title'>
                    چرا <span>آکام؟</span>
                </div>
                <div className='about-content'>
                    <div className='content-title title_hero'>درباره ما</div>
                    <div className='about-contents'></div>
                </div>
            </div>
            <div className='svg-container'>
                <object data={aboutSvg} type=''></object>
            </div>
        </section>
    )
}

export default AboutUs
