import React from 'react'

import loadingImg from '../../static/imgs/loading.jpg'

import './style/loading.scss'

const Loading = () => {
    return (
        <div className='site-loading' attr-image={loadingImg}>
            <div className='loading-title title_hero'>
                به سایت <span className='colored-word'>آکام</span> خوش امدید
            </div>
            <div className='title'>سایت در حال برگزاری است...</div>
        </div>
    )
}

export default Loading
