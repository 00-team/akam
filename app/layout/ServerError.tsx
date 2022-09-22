import React from 'react'

import Svg from '../../static/svg/servererror.svg'

import './style/servererror.scss'

const ServerError = () => {
    return (
        <div className='server_error-container'>
            <div className='svg-container'>
                <object data={Svg} type=''></object>
            </div>
            <div className='error-texts'>
                <div className='title'></div>
                <div className='title_hero'></div>
            </div>
        </div>
    )
}

export default ServerError
