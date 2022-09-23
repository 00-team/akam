import React, { FC } from 'react'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored } from 'components'

import SellColumn from './SellColumn'

import './style/selling.scss'

const Selling: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Selling

    return (
        <main className='selling-container'>
            <header
                className='selling-header'
                style={{
                    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/static/image/contact-header.jpg)`,
                }}
            >
                <div className='header-text title_hero'>
                    <Colored {...Locale.header} />
                </div>
            </header>
            <section className='selling-wrapper'>
                {Locale.strategies.map(strategy => (
                    <SellColumn {...strategy} />
                ))}
            </section>
        </main>
    )
}

export default Selling
