import React, { FC } from 'react'

import { ContactHeader } from './ContactHeader'
import { ContactSocials } from './ContactSocials'

import './style/contactus.scss'

const Contact: FC = () => {
    return (
        <section className='contact-page-container'>
            <ContactHeader />
            <div className='contact-wrapper'>
                <ContactSocials />
                <div className='contact-loc_form'>
                    <div className='contact-form'></div>
                    <div className='contact-location'></div>
                </div>
            </div>
        </section>
    )
}

export default Contact
