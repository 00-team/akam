import React from 'react'

import { HiLocationMarker } from '@react-icons/all-files/hi/HiLocationMarker'
import { IoCall } from '@react-icons/all-files/io5/IoCall'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'

import './style/footer.scss'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='header-section-wrapper title_small'>
                <div className='header-section-container'>
                    <div className='header-section header-call'>
                        <div className='header-section-elems'>
                            <div className='icon header-icon call'>
                                {' '}
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
                                sadrataghavi1383@gmail.com
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
            <div className='content-section'></div>
        </footer>
    )
}

export default Footer
