import React, { FC } from 'react'

import { HiLocationMarker } from '@react-icons/all-files/hi/HiLocationMarker'
import { IoCall } from '@react-icons/all-files/io5/IoCall'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'

import { Link } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { FooterLinkModel, LocaleAtom } from 'state'

import './style/footer.scss'

const Footer: FC = () => {
    return (
        <>
            <footer className='footer-container'>
                <FooterMainSection />
                <ContentSection />
            </footer>
            <a
                href='https://web-00-team.web.app/'
                className='OO-team title_smaller'
                target='_blank'
            >
                Created By 00 Team
            </a>
        </>
    )
}

const FooterMainSection: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Footer

    return (
        <div className='header-section-wrapper title_smaller'>
            <div className='header-section-container'>
                <div className='header-section header-call'>
                    <div className='header-section-elems'>
                        <div className='icon header-icon call'>
                            <IoCall size={24} />
                        </div>
                        <div className='header-holder'>{Locale.phone}</div>
                        <div className='header-svg'></div>
                    </div>
                </div>
            </div>
            <div className='header-section-container'>
                <div className='header-section header-gmail'>
                    <div className='header-section-elems'>
                        <div className='icon header-icon gmail'>
                            <MdEmail size={24} />
                        </div>
                        <div className='header-holder '>{Locale.email}</div>
                        <div className='header-svg'></div>
                    </div>
                </div>
            </div>
            <div className='header-section-container'>
                <div className='header-section header-location'>
                    <div className='header-section-elems'>
                        <div className='icon header-icon location'>
                            <HiLocationMarker size={24} />
                        </div>
                        <div className='header-holder '>{Locale.address}</div>
                        <div className='header-svg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContentSection: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Footer.columns

    return (
        <div className='content-section'>
            <div className='content-wrapper'>
                {Locale.map(({ title, rows }, i0) => (
                    <div key={i0} className='content'>
                        <div className='content-header title_small'>
                            <span className='title-wrapper'>{title}</span>
                        </div>
                        {rows.map((row, i1) => (
                            <ContentRow key={i1} {...row} />
                        ))}
                    </div>
                ))}
            </div>
            <div className='logo-wrapper title_hero'>
                <img src='/static/image/logo.png' alt='' />
            </div>
        </div>
    )
}

const ContentRow: FC<FooterLinkModel> = ({ label, url, external }) => {
    if (external) {
        return (
            <a className='content-link-wrapper' href={url}>
                <div className='content-link title_smaller'>{label}</div>
            </a>
        )
    } else {
        return (
            <Link className='content-link-wrapper' to={url}>
                <div className='content-link title_smaller'>{label}</div>
            </Link>
        )
    }
}

export { Footer }
