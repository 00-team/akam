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
                <div className='title_hero'>خطا در ارتباط با سرور</div>
                <div className='title'>
                    درخواست ارسالی شما به سرور با مشکل مواجه شده است، لطفا بعدا
                    دوباره تلاش کنید.
                </div>
            </div>
        </div>
    )
}

export default ServerError
