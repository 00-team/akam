import React, { useState } from 'react'

import { C } from '@00-team/utils'

import IsIntersecting from 'components/IsIntersecting'

import ContactSvg from '../../static/svgs/contact.svg'

import './style/contactus.scss'

const ContactUs = () => {
    const [HasIntersected, setHasIntersected] = useState(false)
    return (
        <section className='contact-container'>
            <IsIntersecting
                Tag={'section'}
                Intersected={HasIntersected}
                setState={setHasIntersected}
                options={{ threshold: 0.5 }}
                className='contact-container'
            >
                <div className={`contact-wrapper ${C(HasIntersected)}`}>
                    <div className='contact-titles'>
                        <div className='title contact-title'>
                            {' '}
                            <span className='titles-wrapper'>
                                ارتباط با{' '}
                                <span className='colored-word'> آرکام</span>
                            </span>
                        </div>
                        <div className='contact-wrapper'>
                            <div className='title_hero'>راه های ارتباطی ما</div>
                            <div className='contact-content'></div>
                        </div>
                    </div>
                </div>
                <div className='svg-container'>
                    {HasIntersected && <object data={ContactSvg}></object>}
                </div>
            </IsIntersecting>
        </section>
    )
}

export default ContactUs
