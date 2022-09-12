import React from 'react'

import ContactSocials from './ContactSocials'

import ContactHeader from './style/ContactHeader'
import './style/contactus.scss'

const ContactUsPage = () => {
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

export default ContactUsPage
