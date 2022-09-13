import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { useAtomValue } from 'jotai'
import { DescriptionModel, LocaleAtom } from 'state'

import { Colored, IsIntersecting } from 'components'

import './style/selling.scss'

const Selling: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.selling
    const [isIntersecting, setisIntersecting] = useState(false)

    const SellingTitle = useRef<HTMLDivElement>(null)
    const [Transform, setTransform] = useState(0)

    const UpdateTransform = () => {
        if (!SellingTitle.current) return
        const { top } = SellingTitle.current.getBoundingClientRect()

        setTransform(Math.max(top - 600, 0))
    }

    useEffect(() => {
        UpdateTransform()
        window.addEventListener('scroll', UpdateTransform)
    }, [])

    return (
        <IsIntersecting
            Tag='section'
            Intersected={isIntersecting}
            setState={setisIntersecting}
            options={{
                threshold: window.innerWidth >= 768 ? 0.4 : 0.1,
            }}
            className={`sell-container ${C(isIntersecting)}`}
        >
            <div className='sell-titles'>
                <div
                    className={`sell-little-title-wrapper title ${C(
                        isIntersecting
                    )}`}
                >
                    <span className='sell-little-title'>
                        <Colored {...Locale.doom} />
                    </span>
                </div>
                <div
                    className='sell-title title_hero'
                    ref={SellingTitle}
                    style={{ transform: `translateY(${Transform}%)` }}
                >
                    <div className='icon'></div>
                    <div className='holder'>{Locale.title}</div>
                    <div className='icon'></div>
                </div>
            </div>
            <div className='sell-wrapper'>
                <SellCard
                    title={Locale.marketing.title}
                    description={Locale.marketing.description}
                    svg='/static/svg/marketing.svg'
                    transform={Transform}
                />

                <SellCard
                    title={Locale.business_strategy.title}
                    description={Locale.business_strategy.description}
                    svg='/static/svg/strats.svg'
                    transform={Transform}
                />

                <SellCard
                    title={Locale.marketing2.title}
                    description={Locale.marketing2.description}
                    svg='/static/svg/marketing.svg'
                    transform={Transform}
                />
            </div>
        </IsIntersecting>
    )
}

interface SellCardProps {
    svg: string
    title: string
    description: DescriptionModel
    transform: number
}

const SellCard: FC<SellCardProps> = props => {
    const { svg, title, description, transform } = props

    const [isIntersecting, setisIntersecting] = useState(false)
    const Locale = useAtomValue(LocaleAtom).Home.selling.card_button

    return (
        <IsIntersecting
            Tag='div'
            className='sell-card-wrapper'
            options={{
                threshold: 0.4,
            }}
            style={{ transform: `translateY(${transform}%)` }}
            Intersected={isIntersecting}
            setState={setisIntersecting}
        >
            <div className='card-img'>
                {isIntersecting && <img src={svg} />}
            </div>
            <div className='card-content'>
                <div className='card-title-wrapper title'>
                    <span className='card-title'>{title}</span>
                </div>
                <div className='card-description title_small'>
                    {description}
                </div>
            </div>
            <div className='see-more-wrapper '>
                <button className='see-more title_smaller'>{Locale}</button>
            </div>
        </IsIntersecting>
    )
}

export default Selling
