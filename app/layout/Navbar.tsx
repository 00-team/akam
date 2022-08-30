import React from 'react'

import './style/navbar.scss'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-logo'></div>
                <div className='nav-items'>
                    <div className='nav-item'>صفحه اصلی</div>
                    <div className='nav-item'>درباره ما</div>
                    <div className='nav-item'>خدمات</div>
                    <div className='nav-item'>ارتباط با ما</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
