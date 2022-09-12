import React, { FC } from 'react'

import './style/loading.scss'

const Loading: FC = () => {
    return (
        <div
            className='site-loading'
            style={{ backgroundImage: `url(/static/image/loading.jpg)` }}
        >
            <div className='titles-wrapper'>
                <div className='loading-title title_hero'>
                    به سایت <span className='colored-word'>آکام</span> خوش امدید
                </div>
                <div className='title'>سایت در حال برگزاری است...</div>
            </div>
        </div>
    )
}

export { Loading }
