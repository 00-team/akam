import React, { useState } from 'react'

import { C } from '@00-team/utils'

import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'

const ContactPlatforms = () => {
    const [PlatFormActive, setPlatFormActive] = useState('')
    return (
        <div className='contact-platform title_smaller'>
            <div className='platform-title title_small'>
                <span className='title-wrapper'>راه ارتباطی شما با ما</span>
            </div>
            <div className='platforms'>
                <div
                    className={`platform wat ${C(PlatFormActive === 'wat')}`}
                    onClick={() => setPlatFormActive('wat')}
                >
                    <div className='icon'>
                        <SiWhatsapp size={20} fill='#f2f2f2' />
                    </div>
                    <div className='holder'>Whatsapp</div>
                </div>
                <div
                    className={`platform tel ${C(PlatFormActive === 'tel')}`}
                    onClick={() => setPlatFormActive('tel')}
                >
                    <div className='icon'>
                        <SiTelegram size={20} fill='#f2f2f2' />
                    </div>
                    <div className='holder'>Telegram</div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlatforms
