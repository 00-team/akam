import React, { FC, useEffect, useState } from 'react'

import { C } from '@00-team/utils'

import { CgPhone } from '@react-icons/all-files/cg/CgPhone'
import { FaBuilding } from '@react-icons/all-files/fa/FaBuilding'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
import { GrServices } from '@react-icons/all-files/gr/GrServices'
import { IoIosGlobe } from '@react-icons/all-files/io/IoIosGlobe'

import { Link, useLocation } from 'react-router-dom'

import { useAtom, useAtomValue } from 'jotai'
import { LocaleAtom, LocaleModel, LocalesListAtom } from 'state'

import './style/navbar.scss'

const Navbar: FC = () => {
    const [WindowWidth, setWindowWidth] = useState(innerWidth)

    const Locale = useAtomValue(LocaleAtom).Navbar
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
                <MajorScreenNav isLoc={CheckLocation} Locale={Locale} />
            ) : (
                <SmallScreenNav isLoc={CheckLocation} Locale={Locale} />
            )}
        </>
    )
}

interface NavProps {
    isLoc: (item: string) => void
    Locale: LocaleModel['Navbar']
}

const MajorScreenNav: FC<NavProps> = ({ isLoc, Locale }) => {
    return (
        <nav className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-content'>
                    <ChangeLang />
                    <div className='nav-items'>
                        <Link
                            to='contact/'
                            className={`nav-item ${C(isLoc('contact'))}`}
                        >
                            {Locale.contact}
                        </Link>
                        <Link
                            to='selling/'
                            className={`nav-item ${C(isLoc('selling'))}`}
                        >
                            {Locale.services}
                        </Link>
                        <Link
                            to='about/'
                            className={`nav-item ${C(isLoc('about'))}`}
                        >
                            {Locale.about}
                        </Link>
                        <Link to='/' className={`nav-item ${C(isLoc(''))}`}>
                            {Locale.home}
                        </Link>
                    </div>
                </div>
                <div
                    className='nav-logo'
                    style={{ backgroundImage: 'url(/static/image/logo.png)' }}
                ></div>
            </div>
        </nav>
    )
}

const SmallScreenNav: FC<NavProps> = ({ isLoc, Locale }) => {
    const [Active, setActive] = useState(false)

    return (
        <>
            <div
                className={`toggle-btn ${C(Active)}`}
                onClick={() => setActive(!Active)}
            >
                {!Active ? (
                    <>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </>
                ) : (
                    <>
                        <div className='close'>
                            <GrClose size={24} />
                        </div>
                    </>
                )}
            </div>
            <nav className={`mobile-nav ${C(Active)}`}>
                <section className='navbar-wrapper title '>
                    <ChangeLang titleFont='title_small' />
                    <div className='nav-content'>
                        <div className='nav-items'>
                            <Link
                                to='contact'
                                className={`nav-item ${C(isLoc('contact'))}`}
                                onClick={() => setActive(false)}
                            >
                                <div className='icon'>
                                    <CgPhone size={24} />
                                </div>
                                <div className='holder'>{Locale.contact}</div>
                            </Link>
                            <Link
                                to='selling'
                                className={`nav-item ${C(isLoc('selling'))}`}
                                onClick={() => setActive(false)}
                            >
                                <div className='icon'>
                                    <GrServices size={24} />
                                </div>
                                <div className='holder'>{Locale.services}</div>
                            </Link>
                            <Link
                                to='about'
                                className={`nav-item ${C(isLoc('about'))}`}
                                onClick={() => setActive(false)}
                            >
                                <FaBuilding size={24} />
                                <div className='holder'>{Locale.about}</div>
                            </Link>
                            <Link
                                to='/'
                                className={`nav-item ${C(isLoc(''))}`}
                                onClick={() => setActive(false)}
                            >
                                <div className='icon'>
                                    <FaHome size={24} />
                                </div>
                                <div className='holder'>{Locale.home}</div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className='nav-logo'
                        style={{
                            backgroundImage: 'url(/static/image/logo.png)',
                        }}
                    ></div>
                </section>
            </nav>
        </>
    )
}

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
export { Navbar }
