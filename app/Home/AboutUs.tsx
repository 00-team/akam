import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { IconType } from '@react-icons/all-files'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'

import { useAtomValue } from 'jotai'
import { DescriptionModel, LocaleAtom } from 'state'

import { Colored, Description } from 'components'

import aboutSvg from '../../static/svgs/about.svg'

import './style/aboutus.scss'

const AboutUs: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.about
    const LazyRef = useRef<HTMLDivElement>(null)
    const [isIntersecting, setisIntersecting] = useState(false)

    useEffect(() => {
        if (LazyRef.current && !isIntersecting) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setisIntersecting(true)
                        observer.disconnect()
                    }
                },
                {
                    threshold: window.innerWidth >= 768 ? 0.5 : 0.2,
                }
            )
            observer.observe(LazyRef.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [LazyRef])

    return (
        <section className='about-container' ref={LazyRef} id='about'>
            <div className='svg-container'>
                {isIntersecting && <object data={aboutSvg} type=''></object>}
            </div>
            <div className={`about-wrapper ${C(isIntersecting)}`}>
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
        </section>
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
        <div
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
        </div>
    )
}

export default AboutUs
