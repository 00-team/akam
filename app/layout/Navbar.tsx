import React, { FC, useEffect, useState } from 'react'

import { C } from '@00-team/utils'

import { CgPhone } from '@react-icons/all-files/cg/CgPhone'
import { FaBuilding } from '@react-icons/all-files/fa/FaBuilding'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import { GrServices } from '@react-icons/all-files/gr/GrServices'
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
            {WindowWidth >= 1026 ? (
                <MajorScreenNav CheckLocation={CheckLocation} Loacle={Loacle} />
            ) : (
                <SmallScreenNav CheckLocation={CheckLocation} Loacle={Loacle} />
            )}
        </>
    )
}

interface NavProps {
    CheckLocation: (item: string) => void
    Loacle: LocaleModel['Navbar']
}

const MajorScreenNav: FC<NavProps> = ({ CheckLocation, Loacle }) => {
    return (
        <nav className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-content'>
                    <ChangeLang />
                    <div className='nav-items'>
                        <a
                            href='contact-us'
                            className={`nav-item ${C(
                                CheckLocation('contact')
                            )}`}
                        >
                            {Loacle.contact}
                        </a>
                        <a
                            href='services'
                            className={`nav-item ${C(
                                CheckLocation('services')
                            )}`}
                        >
                            {Loacle.services}
                        </a>
                        <a
                            href='about'
                            className={`nav-item ${C(CheckLocation('about'))}`}
                        >
                            {Loacle.about}
                        </a>
                        <a
                            href='/'
                            className={`nav-item ${C(CheckLocation(''))}`}
                        >
                            {Loacle.home}
                        </a>
                    </div>
                </div>
                <div className='nav-logo'>LOGO</div>
            </div>
        </nav>
    )
}

const SmallScreenNav: FC<NavProps> = ({ CheckLocation, Loacle }) => {
    const [Active, setActive] = useState(false)

    return (
        <nav className='mobile-nav'>
            <div
                className={`toggle-btn ${C(Active)}`}
                onClick={() => setActive(!Active)}
            >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <section className={`navbar-wrapper title ${C(Active)}`}>
                <ChangeLang titleFont='title_small' />
                <div className='nav-content'>
                    <div className='nav-items'>
                        <a
                            href='contact-us'
                            className={`nav-item ${C(
                                CheckLocation('contact')
                            )}`}
                        >
                            <div className='icon'>
                                <CgPhone size={24} />
                            </div>
                            <div className='holder'>{Loacle.contact}</div>
                        </a>
                        <a
                            href='services'
                            className={`nav-item ${C(
                                CheckLocation('services')
                            )}`}
                        >
                            <div className='icon'>
                                <GrServices size={24} />
                            </div>
                            <div className='holder'>{Loacle.services}</div>
                        </a>
                        <a
                            href='about'
                            className={`nav-item ${C(CheckLocation('about'))}`}
                        >
                            <FaBuilding size={24} />
                            <div className='holder'>{Loacle.about}</div>
                        </a>
                        <a
                            href='/'
                            className={`nav-item ${C(CheckLocation(''))}`}
                        >
                            <div className='icon'>
                                <FaHome size={24} />
                            </div>
                            <div className='holder'>{Loacle.home}</div>
                        </a>
                    </div>
                </div>
                <div className='nav-logo'>LOGO</div>
            </section>
        </nav>
    )
}

export default Navbar

interface ChangeLangProps {
    titleFont?: string
}

const ChangeLang: FC<ChangeLangProps> = ({ titleFont }) => {
    const [Locale, UpdateLocale] = useAtom(LocaleAtom)
    const LocaleList = useAtomValue(LocalesListAtom).filter(
        ({ id }) => id !== Locale.id
    )
    const [ChangeLang, setChangeLang] = useState(false)

    return (
        <div
            className={`nav-language-wrapper  ${
                titleFont ? titleFont : 'title_smaller'
            }`}
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
