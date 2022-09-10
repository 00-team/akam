import React, { FC, useState } from 'react'

import { C } from '@00-team/utils'

import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import { IoIosGlobe } from '@react-icons/all-files/io/IoIosGlobe'

import { useLocation } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import './style/navbar.scss'

const Navbar: FC = () => {
    const Loacle = useAtomValue(LocaleAtom).Navbar
    const Location = useLocation()

    const CheckLocation = (item: string) =>
        Location.pathname.split('/')[1] === item

    return (
        <nav className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-content'>
                    <ChangeLang />
                    <div className='nav-items'>
                        <div
                            className={`nav-item ${C(
                                CheckLocation('contact')
                            )}`}
                        >
                            {Loacle.contact}
                        </div>
                        <div
                            className={`nav-item ${C(
                                CheckLocation('services')
                            )}`}
                        >
                            {Loacle.services}
                        </div>
                        <div
                            className={`nav-item ${C(CheckLocation('about'))}`}
                        >
                            {Loacle.about}
                        </div>
                        <div className={`nav-item ${C(CheckLocation(''))}`}>
                            {Loacle.home}
                        </div>
                    </div>
                </div>
                <div className='nav-logo'>LOGO</div>
            </div>
        </nav>
    )
}

export default Navbar

const SAMPLE_LANGS = ['english', 'french']

const ChangeLang = () => {
    const [ChangeLang, setChangeLang] = useState(false)
    return (
        <div
            className='nav-language-wrapper  title_smaller'
            onClick={() => setChangeLang(!ChangeLang)}
        >
            <div className='nav-language-default '>
                <div className='drop-icon icon'>
                    <FiChevronDown />
                </div>
                <div className='holder'>فارسی</div>
                <div className='icon'>
                    <IoIosGlobe size={24} />
                </div>
            </div>
            <div className={`nav-language-change ${C(ChangeLang)}`}>
                {SAMPLE_LANGS.map((lang, index) => {
                    return (
                        <div
                            className='language-change'
                            key={index}
                            style={{
                                transitionDelay: `${index * 0.25 + 0.5}s`,
                            }}
                        >
                            <div className='icon'>
                                <IoIosGlobe size={24} />
                            </div>
                            <div className='holder'>{lang}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
