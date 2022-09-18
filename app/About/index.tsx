import React, { FC } from 'react'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored } from 'components'

import AboutCard from './AboutCard'
import AboutHeader from './AboutHeader'

import './style/about.scss'

const About: FC = () => {
    const Locale = useAtomValue(LocaleAtom).About

    return (
        <div className='about-page-container'>
            <AboutHeader />
            <section className='about-wrapper'>
                <div className='about-creators'>
                    <header className='creators-title title_hero'>
                        <div className='header-wrapper'>
                            <Colored {...Locale.title} />
                        </div>
                    </header>
                    <div className='creators-wrapper'>
                        {Locale.members.map(member => (
                            <AboutCard {...member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
