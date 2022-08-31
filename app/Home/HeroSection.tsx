import React from 'react'

// import { Typer } from '@00-team/utils'
import heroSvg from '../../static/svgs/hero.svg'

import './style/herosection.scss'

const HeroSection = () => {
    return (
        <div className='hero-cointainer'>
            <div className='svg-container'>
                <img src={heroSvg} alt='' />
            </div>
            <div className='texts-container'>
                <div style={{ direction: 'rtl' }}>
                    {/* <Typer
                        words={['موفقیت', 'آکام']}
                        CursorStyle={{
                            height: 80,
                            background: 'red',
                            width: 4,
                            display: 'inline-block',
                        }}
                    /> */}
                </div>
                <div className='animation'>
                    <div
                        className='title_small motto'
                        style={{ animationDelay: '1s' }}
                    >
                        !موفقیت اتفاقی نیست
                    </div>
                </div>{' '}
                <div className='animation'>
                    <div
                        className='title_hero'
                        style={{ animationDelay: '1.3s' }}
                    >
                        شرکت واردات و صادرات <span>آکام</span>
                    </div>
                </div>
                <div className='animation'>
                    <div
                        className='title_small text-desc'
                        style={{ animationDelay: '1.6s' }}
                    >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه
                    </div>
                </div>
            </div>
            <div className='scroll-down'></div>
        </div>
    )
}

export default HeroSection
