import React from 'react'

import { C } from '@00-team/utils'

import { useLocation } from 'react-router-dom'

import './style/navbar.scss'

const Navbar = () => {
    const Location = useLocation()

    console.log(Location.pathname.split('/')[1])

    const navItemClass = (item: string) => {
        let currentLocation = Location.pathname.split('/')[1]
        if (currentLocation === item) return true
        return false
    }

    return (
        <div className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-logo'>LOGO</div>
                <div className='nav-items'>
                    <div className={`nav-item ${C(navItemClass(''))}`}>
                        صفحه اصلی
                    </div>
                    <div className={`nav-item ${C(navItemClass('about-us'))}`}>
                        درباره ما
                    </div>
                    <div className={`nav-item ${C(navItemClass('services'))}`}>
                        خدمات
                    </div>
                    <div
                        className={`nav-item ${C(navItemClass('contact-us'))}`}
                    >
                        ارتباط با ما
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
