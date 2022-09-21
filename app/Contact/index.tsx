import React, { FC } from 'react'

import ContactForm from './ContactForm'
import { ContactHeader } from './ContactHeader'
import ContactLocation from './ContactLocation'
import { ContactSocials } from './ContactSocials'

import './style/contactus.scss'

const Contact: FC = () => {
    return (
        <main className='contact-page-container'>
            <ContactHeader />
            <section className='contact-wrapper'>
                <ContactSocials />
                <div className='contact-loc_form'>
                    <ContactForm />
                    <ContactLocation />
                </div>
            </section>
        </main>
    )
}

export default Contact
