import React, { useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import './style/selling.scss'

const Selling = () => {
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
                    threshold: 0.3,
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
                <div className='sell-title title_hero'>
                    <div className='icon'></div>
                    <div className='holder'>استراژی های فروش</div>
                    <div className='icon'></div>
                </div>
            </div>
            <div className='sell-wrapper'></div>
        </section>
    )
}

export default Selling
