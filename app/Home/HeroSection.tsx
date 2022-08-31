import React from 'react'

import { Typer } from '@00-team/utils'

import heroSvg from '../../static/svgs/hero.svg'

import './style/herosection.scss'

const HeroSection = () => {
    return (
        <section className='hero-cointainer'>
            <div className='svg-container'>
                <img src={heroSvg} alt='' />
            </div>
            <div className='texts-container title_small'>
                <div style={{ direction: 'rtl' }}>
                    <Typer
                        words={['بیزینس', 'شرکت', 'تیم']}
                        WriteDelay={100}
                        CursorStyle={{
                            background: 'var(--sixty-percent)',
                            width: 2,
                            height: 15,
                            display: 'inline-block',
                        }}
                    />{' '}
                    خود را به سطح جهانی ببرید
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
        </section>
    )
}

export default HeroSection
