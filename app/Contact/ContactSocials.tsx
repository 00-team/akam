import React, { FC } from 'react'

import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

const ContactSocials: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.title

    const IsMobile = innerWidth <= 1024

    return (
        <div className='contact-socials-wrapper'>
            <div className='contact-socials-title title_hero'>{Locale}</div>
            <div
                className={`contact-socials title_smaller ${
                    IsMobile ? 'vertical' : 'horizental'
                } `}
            >
                <a
                    className='social-icon call'
                    style={{ animationDelay: `.5s` }}
                >
                    <FiPhoneCall size={35} className='icon-svg' />
                    <div className='tooltip'>09124862614</div>
                </a>
                <a
                    className='social-icon instagram'
                    style={{ animationDelay: `1s` }}
                >
                    <SiGmail size={35} className='icon-svg' />
                    <div className='tooltip'>@Sadra_Tghvi</div>
                </a>
                <a
                    className='social-icon facebook'
                    style={{ animationDelay: `.7s` }}
                >
                    <SiWhatsapp size={35} className='icon-svg' />
                    <div className='tooltip'>09124862614</div>
                </a>
                <a
                    className='social-icon tel'
                    style={{ animationDelay: `1.25s` }}
                >
                    <SiTelegram size={35} className='icon-svg' />
                    <div className='tooltip'>@sadrataghavi3</div>
                </a>
            </div>
        </div>
    )
}

export { ContactSocials }
