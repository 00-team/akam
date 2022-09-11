import React, { FC, useEffect, useState } from 'react'

import { C } from '@00-team/utils'

import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import { IoIosGlobe } from '@react-icons/all-files/io/IoIosGlobe'

import { useLocation } from 'react-router-dom'

import { useAtom, useAtomValue } from 'jotai'
import { LocaleAtom, LocaleModel, LocalesListAtom } from 'state'

import './style/navbar.scss'

const Navbar: FC = () => {
    const [WindowWidth, setWindowWidth] = useState(innerWidth)

    const Loacle = useAtomValue(LocaleAtom).Navbar
    const Location = useLocation()

    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(innerWidth)
        }
    }, [])

    const CheckLocation = (item: string) =>
        Location.pathname.split('/')[1] === item

    return (
        <>
            {WindowWidth >= 1024 ? (
                <MajorScreenNav CheckLocation={CheckLocation} Loacle={Loacle} />
            ) : (
                <SmallScreenNav />
            )}
        </>
    )
}

interface MajorScreenNavProps {
    CheckLocation: (item: string) => void
    Loacle: LocaleModel['Navbar']
}

const MajorScreenNav: FC<MajorScreenNavProps> = ({ CheckLocation, Loacle }) => {
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

const SmallScreenNav = () => {
    return <></>
}

export default Navbar

const ChangeLang: FC = () => {
    const [Locale, UpdateLocale] = useAtom(LocaleAtom)
    const LocaleList = useAtomValue(LocalesListAtom).filter(
        ({ id }) => id !== Locale.id
    )
    const [ChangeLang, setChangeLang] = useState(false)

    return (
        <div
            className='nav-language-wrapper  title_smaller'
            onClick={() => setChangeLang(!ChangeLang)}
        >
            <div className={`nav-language-default ${C(ChangeLang)}`}>
                <div className='drop-icon icon'>
                    <FiChevronDown />
                </div>
                <div className='holder'>{Locale.label}</div>
                <div className='icon'>
                    <IoIosGlobe size={24} />
                </div>
            </div>
            <div className={`nav-language-change ${C(ChangeLang)}`}>
                {LocaleList.map(({ label, id }, index) => {
                    return (
                        <div
                            className='language-change'
                            key={index}
                            style={{
                                transitionDelay: `${
                                    ChangeLang ? index * 0.25 + 0.5 : 0
                                }s`,
                            }}
                            onClick={() => UpdateLocale(id)}
                        >
                            <div className='icon'>
                                <IoIosGlobe size={24} />
                            </div>
                            <div className='holder'>{label}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
