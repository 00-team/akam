import React, { FC } from 'react'

import './style/error.scss'

const Error: FC<ErrorData> = ({ code, title, description }) => {
    return (
        <div className='error-container'>
            <h1 className='title'>
                {code} - {title}
            </h1>
            <p className='description'>{description}</p>
            {code === 404 && (
                <button
                    className='home-link'
                    onClick={() => open('/', '_self')}
                >
                    Home Page
                </button>
            )}
        </div>
    )
}

export default Error
