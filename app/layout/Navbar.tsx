import React, { FC } from 'react'

import { C } from '@00-team/utils'

import { useLocation } from 'react-router-dom'

import './style/navbar.scss'

const Navbar: FC = () => {
    const Location = useLocation()

    const CheckLocation = (item: string) =>
        Location.pathname.split('/')[1] === item

    return (
        <div className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-items'>
                    <div className={`nav-item ${C(CheckLocation('contact'))}`}>
                        ارتباط با ما
                    </div>

                    <div className={`nav-item ${C(CheckLocation('services'))}`}>
                        خدمات
                    </div>
                    <div className={`nav-item ${C(CheckLocation('about'))}`}>
                        درباره ما
                    </div>
                    <div className={`nav-item ${C(CheckLocation(''))}`}>
                        صفحه اصلی
                    </div>
                </div>
                <div className='nav-logo'>LOGO</div>
            </div>
        </div>
    )
}

export default Navbar
