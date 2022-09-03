import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import MarketingSvg from './../../static/svgs/marketing.svg'
import StratsSvg from './../../static/svgs/strats.svg'

import './style/selling.scss'

const Selling = () => {
    const LazyRef = useRef<HTMLDivElement>(null)
    const [isIntersecting, setisIntersecting] = useState(false)

    const SellingTitle = useRef<HTMLDivElement>(null)
    const [Transform, setTransform] = useState(0)

    window.onscroll = () => {
        if (SellingTitle.current) {
            setTransform(
                SellingTitle.current.getBoundingClientRect().top - 600 <= 0
                    ? 0
                    : SellingTitle.current.getBoundingClientRect().top - 600
            )
        }
    }

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
                    threshold: 0.4,
                }
            )
            observer.observe(LazyRef.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [LazyRef])
    return (
        <section
            className={`sell-container ${C(isIntersecting)}`}
            ref={LazyRef}
        >
            <div className='sell-titles'>
                <div
                    className={`sell-little-title-wrapper title ${C(
                        isIntersecting
                    )}`}
                >
                    <span className='sell-little-title'>
                        چرا <span className='colored-word'>آکام؟</span>
                    </span>
                </div>
                <div
                    className='sell-title title_hero'
                    ref={SellingTitle}
                    style={{ transform: `translateY(${Transform}%)` }}
                >
                    <div className='icon'></div>
                    <div className='holder'>استراژی های فروش</div>
                    <div className='icon'></div>
                </div>
            </div>
            <div className='sell-wrapper'>
                <SellCard
                    title=' بازار یابی'
                    description='
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                            با استفاده از طراحان گرافیک است. چاپگرها'
                    svg={MarketingSvg}
                    transform={Transform}
                />

                <SellCard
                    title='استراژی کاری '
                    description='
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                            با استفاده از طراحان گرافیک است. چاپگرها'
                    svg={StratsSvg}
                    transform={Transform}
                />

                <SellCard
                    title=' بازار یابی'
                    description='
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                            با استفاده از طراحان گرافیک است. چاپگرها'
                    svg={MarketingSvg}
                    transform={Transform}
                />
            </div>
        </section>
    )
}

interface SellCardProps {
    svg: string
    title: string
    description: string
    transform: number
}

const SellCard: FC<SellCardProps> = ({
    svg,
    title,
    description,
    transform,
}) => {
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
                    threshold: 0.4,
                }
            )
            observer.observe(LazyRef.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [LazyRef])
    return (
        <div
            className='sell-card-wrapper'
            style={{ transform: `translateY(${transform}%)` }}
            ref={LazyRef}
        >
            <div className='card-img'>
                {isIntersecting && <img src={svg} alt='' />}
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
                <button className='see-more title_smaller'>ادامه مطلب</button>
            </div>
        </div>
    )
}

export default Selling
