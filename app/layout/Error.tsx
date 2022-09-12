import React, { FC } from 'react'

import './style/error.scss'

const Error: FC<ErrorData> = ({ code, title, description }) => {
    console.log(code, title, description)

    return (
        <div className='error-container'>
            {/* <h1 className='title'>
                {code} - {title}
            </h1>
            <p className='description'>{description}</p>
            {code === 404 && (
                <button
                    className='home-link'
                    onClick={() => open('/', '_self')}
                >
                    صفحه اصلی
                </button>
            )} */}
            <div className='svg-container'>
                <object data={'/static/svgs/error.svg'} type=''></object>
            </div>
            <h1 className='title'></h1>
            <p className='title_hero'>صفحه ای که به دنبال آن هستید پیدا نشد!</p>
            <button
                className='home-link title'
                onClick={() => open('/', '_self')}
            >
                صفحه اصلی
            </button>
        </div>
    )
}

export default Error
