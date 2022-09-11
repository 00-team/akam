import React from 'react'

import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'

import HeaderImg from '../../static/imgs/ContactHeader.jpg'

import './style/contactus.scss'

const ContactUsPage = () => {
    const IsMobile = innerWidth <= 1024
    return (
        <section className='contact-page-container'>
            <div
                className='contact-header'
                style={{
                    backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ),
                url(${HeaderImg})`,
                }}
            >
                <div className='header-text title_hero'>
                    تماس با <span className='colored-word'>آکام</span>
                </div>
            </div>
            <div className='contact-wrapper'>
                <div className='contact-socials-wrapper'>
                    <div className='contact-socials-title title_hero'>
                        راه های ارتباطی ما
                    </div>
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
                            <div className='tooltip'>09120974956</div>
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
                            <div className='tooltip'>09120974956</div>
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
                <div className='contact-loc_form'>
                    <div className='contact-form'></div>
                    <div className='contact-location'></div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage
