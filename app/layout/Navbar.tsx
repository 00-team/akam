import React, { FC } from 'react'

import { C } from '@00-team/utils'

import { useLocation } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import './style/navbar.scss'

const Navbar: FC = () => {
    const Loacle = useAtomValue(LocaleAtom).Navbar
    const Location = useLocation()

    const CheckLocation = (item: string) =>
        Location.pathname.split('/')[1] === item

    return (
        <nav className='nav-container'>
            <div className='nav-wrapper title_small'>
                <div className='nav-language'>
                    <div className='holder'></div>
                    <div className='icon'></div>
                </div>
                <div className='nav-items'>
                    <div className={`nav-item ${C(CheckLocation('contact'))}`}>
                        {Loacle.contact}
                    </div>
                    <div className={`nav-item ${C(CheckLocation('services'))}`}>
                        {Loacle.services}
                    </div>
                    <div className={`nav-item ${C(CheckLocation('about'))}`}>
                        {Loacle.about}
                    </div>
                    <div className={`nav-item ${C(CheckLocation(''))}`}>
                        {Loacle.home}
                    </div>
                </div>
                <div className='nav-logo'>LOGO</div>
            </div>
        </nav>
    )
}

export default Navbar
