import React, { FC } from 'react'

import { Typer } from '@00-team/utils'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import heroSvg from '../../static/svgs/hero.svg'

import './style/herosection.scss'

const HeroSection: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.hero

    return (
        <section className='hero-cointainer'>
            <div className='svg-container'>
                <img src={heroSvg} alt='' />
            </div>
            <div className='texts-container title_small'>
                <div className='gg-motto' style={{ direction: 'rtl' }}>
                    {/* <Typer words={['بیزینس', 'شرکت', 'تیم']} WriteDelay={100} /> */}
                    <Typer words={Locale.motto0.words} WriteDelay={100} />
                    {/* خود را به سطح جهانی ببرید */}
                    {Locale.motto0.sentence}
                </div>
                <div className='animation'>
                    <div
                        className='title_small motto'
                        style={{ animationDelay: '1s' }}
                    >
                        {/* !موفقیت اتفاقی نیست */}
                        {Locale.motto}
                    </div>
                </div>
                <div className='animation'>
                    <div
                        className='title_hero'
                        style={{ animationDelay: '1.3s' }}
                    >
                        {/* شرکت واردات و صادرات <span>آکام</span> */}

                        {Locale.title}
                    </div>
                </div>
                <div className='animation'>
                    <div
                        className='title_small text-desc'
                        style={{ animationDelay: '1.6s' }}
                    >
                        {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه */}

                        {Locale.description}
                    </div>
                </div>
            </div>
            <div className='scroll-down'></div>
        </section>
    )
}

export default HeroSection
