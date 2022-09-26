import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { StrategyModel } from 'state'

import { Description } from 'components'

const SellColumn: FC<StrategyModel> = ({ title, description }) => {
    const container = useRef<HTMLDivElement>(null)
    const [Isintersected, setIsintersected] = useState(false)

    useEffect(() => {
        if (container.current && !Isintersected) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setIsintersected && setIsintersected(true)
                        observer.disconnect()
                    }
                },
                {
                    rootMargin: '-100px',
                }
            )

            observer.observe(container.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [container])
    return (
        <div className='sell-column' ref={container}>
            <div className={`sell-img ${C(Isintersected)}`}>
                <img
                    loading='lazy'
                    src='https://picsum.photos/1920/1080'
                    alt=''
                />
                <h1 className='title_hero'>{title}</h1>
            </div>
            <div className='sell-description title_smaller'>
                <Description text={description} />
            </div>
        </div>
    )
}

export default SellColumn
