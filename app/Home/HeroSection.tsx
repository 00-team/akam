import React from 'react'

import { Typer } from '@00-team/utils'

import img from '../../static/imgs/hero.png'

import './style/herosection.scss'

const HeroSection = () => {
    return (
        <div className='hero-cointainer'>
            <div className='svg-container'>
                <img src={img} alt='' />
            </div>
            <div className='texts-container'>
                <div style={{ direction: 'rtl' }}>
                    <Typer
                        words={['موفقیت', 'آکام']}
                        CursorStyle={{
                            height: 80,
                            background: 'red',
                            width: 4,
                            display: 'inline-block',
                        }}
                    />
                </div>
                <div className='title_small motto'>!موفقیت اتفاقی نیست</div>
                <div className='title_hero'>
                    شرکت واردات و صادرات <span>آکام</span>
                </div>
                <div className='title_small text-desc'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                </div>
            </div>
        </div>
    )
}

export default HeroSection
