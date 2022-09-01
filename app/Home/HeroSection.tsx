import React, { FC } from 'react'

import { Typer } from '@00-team/utils'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored, Description } from 'components'

import heroSvg from '../../static/svgs/hero.svg'

import './style/herosection.scss'

const HeroSection: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.hero

    return (
        <section className='hero-cointainer'>
            <div className='texts-container title_small'>
                <div className='animation'>
                    <div
                        className='title_small motto'
                        style={{ animationDelay: '1s' }}
                    >
                        <Typer
                            words={Locale.motto.words}
                            DeleteDelay={100}
                            MidDelay={1000}
                        />

                        {Locale.motto.sentence}
                    </div>
                </div>
                <div className='animation'>
                    <div
                        className='title_hero'
                        style={{ animationDelay: '1.3s' }}
                    >
                        <Colored
                            text={Locale.title.sentence}
                            subtext={Locale.title.company}
                        />
                    </div>
                </div>
                <div className='animation'>
                    <div
                        className='title_small text-desc'
                        style={{ animationDelay: '1.6s' }}
                    >
                        <Description text={Locale.description} />
                    </div>
                </div>
            </div>
            <div className='svg-container'>
                <img src={heroSvg} alt='' />
            </div>
            <div className='scroll-down'></div>
        </section>
    )
}

export default HeroSection
