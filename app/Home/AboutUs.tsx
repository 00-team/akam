import React, { FC } from 'react'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import './style/aboutus.scss'

const AboutUs: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.about

    return (
        <section
            className='about-container'
            style={{ display: 'block', textAlign: 'center' }}
        >
            {Locale}
        </section>
    )
}

export default AboutUs
