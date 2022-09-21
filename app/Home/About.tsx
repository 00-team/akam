import React, { FC, useState } from 'react'

import { C } from '@00-team/utils'

import { IconType } from '@react-icons/all-files'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'

import { Link } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { DescriptionModel, LocaleAtom } from 'state'

import { Colored, Description, IsIntersecting } from 'components'

import './style/aboutus.scss'

const AboutUs: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.about

    const [HasIntersected, setHasIntersected] = useState(false)

    return (
        <IsIntersecting
            Tag='section'
            className='about-container'
            id='about'
            Intersected={HasIntersected}
            setState={setHasIntersected}
            options={{ threshold: window.innerWidth >= 768 ? 0.5 : 0.2 }}
        >
            <div className='svg-container'>
                {HasIntersected && (
                    <object data='/static/svg/about.svg' type='' />
                )}
            </div>
            <div className={`about-wrapper ${C(HasIntersected)}`}>
                <div className='about-title-card title'>
                    <span className='span-wrapper'>
                        <Colored {...Locale.doom} />
                    </span>
                </div>
                <div className='about-content-wrapper'>
                    <div className='content-title section_title'>
                        {Locale.title}
                    </div>
                    <div className='about-contents'>
                        <div className='contents-wrapper'>
                            <AboutContent
                                Icon={FaHandshake}
                                delay={2.3}
                                className='trust'
                                title={Locale.trust.title}
                                description={Locale.trust.description}
                            />
                            <AboutContent
                                delay={2.9}
                                Icon={FaHandshake}
                                className='innovation'
                                title={Locale.trust2.title}
                                description={Locale.trust2.description}
                            />
                        </div>
                        <div className='contents-wrapper'>
                            <AboutContent
                                delay={2}
                                Icon={FaGlobe}
                                className='innovation'
                                title={Locale.innovation.title}
                                description={Locale.innovation.description}
                            />
                            <AboutContent
                                delay={2.6}
                                Icon={FaHandshake}
                                className='trust'
                                title={Locale.trust3.title}
                                description={Locale.trust3.description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </IsIntersecting>
    )
}

interface AboutContentProps {
    Icon: IconType
    className?: string
    delay: number
    title: string
    description: DescriptionModel
}

const AboutContent: FC<AboutContentProps> = props => {
    const { Icon, title, description, className, delay } = props

    const Locale = useAtomValue(LocaleAtom).Home.about.card_button

    return (
        <Link
            to={'about'}
            className={`about-content ${className && className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className='about-svg'>
                <Icon size={30} />
            </div>
            <div className='about-title title_small'>{title}</div>
            <div className='about-description description'>
                <Description text={description} />
            </div>
            <button className='about-see-more description'>{Locale}</button>
        </Link>
    )
}

export default AboutUs
