import React, { FC } from 'react'

import { HiLocationMarker } from '@react-icons/all-files/hi/HiLocationMarker'
import { IoCall } from '@react-icons/all-files/io5/IoCall'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'

import './style/footer.scss'

const Footer: FC = () => {
    return (
        <footer className='footer-container'>
            <FooterMainSection />
            <ContentSection />
        </footer>
    )
}

const FooterMainSection: FC = () => {
    return (
        <div className='header-section-wrapper title_small'>
            <div className='header-section-container'>
                <div className='header-section header-call'>
                    <div className='header-section-elems'>
                        <div className='icon header-icon call'>
                            <IoCall size={24} />
                        </div>
                        <div className='header-holder'>09120974956</div>
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
                        <div className='header-holder '>
                            Info@akambusiness.com
                        </div>
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
                        <div className='header-holder '>
                            تهران، امیر اباد، خیابان عبداللهی، پلاک 20
                        </div>
                        <div className='header-svg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContentSection: FC = () => {
    return (
        <div className='content-section'>
            <div className='content-wrapper'>
                <div className='content'>
                    <div className='content-header title_small'>
                        <span className='title-wrapper'>درباره ما</span>
                    </div>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                </div>
                <div className='content'>
                    <div className='content-header title_small'>
                        <span className='title-wrapper'>خدمات</span>
                    </div>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                </div>
                <div className='content'>
                    <div className='content-header title_small'>
                        <span className='title-wrapper'>ارتباط با ما</span>
                    </div>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                    <a className='content-link-wrapper' href=''>
                        <div className='content-link title_smaller'>
                            لورم ایپسون متن
                        </div>
                    </a>
                </div>
            </div>
            <div className='logo-wrapper title_hero'>LOGO</div>
        </div>
    )
}

export default Footer
