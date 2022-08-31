import React from 'react'

import aboutSvg from '../../static/svgs/about.svg'

import './style/aboutus.scss'

const AboutUs = () => {
    return (
        <section className='about-container' id='about'>
            <div className='about-wrapper'>
                <div className='about-title title'>
                    <span className='span-wrapper'>
                        چرا <span>آکام؟</span>
                    </span>
                </div>
                <div className='about-content'>
                    <div className='content-title section_title'>درباره ما</div>
                    <div className='about-contents'>
                        <div className='contents-wrapper'>
                            <div className='about-content'></div>
                            <div className='about-content'></div>
                        </div>
                        <div className='contents-wrapper'>
                            <div className='about-content'></div>
                            <div className='about-content'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='svg-container'>
                <object data={aboutSvg} type=''></object>
            </div>
        </section>
    )
}

export default AboutUs
