import React, { FC } from 'react'

import Recaptcha from 'react-google-recaptcha'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored } from 'components'

const ContactForm: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.form

    return (
        <form className='contact-form '>
            <fieldset>
                <legend className='title'>
                    <Colored {...Locale.title} />
                </legend>
                <div className='title-inps'>
                    <input
                        type='text'
                        className='name title_smaller'
                        name='name'
                        placeholder={Locale.first_name}
                    />
                    <input
                        type='text'
                        className='lastname title_smaller'
                        name='lastname'
                        placeholder={Locale.last_name}
                    />
                </div>
                <input
                    type='text'
                    className='gmail title_smaller'
                    name='gmail'
                    placeholder={Locale.email}
                />
                <textarea
                    className='title_smaller'
                    name='message'
                    cols={30}
                    rows={10}
                    placeholder={Locale.message}
                ></textarea>
                <Recaptcha sitekey='6LdtbPchAAAAAHnA1I7gwa_mKl5sWh-jWe6daYif' />
                <div className='cta-wrapper'>
                    <button className='cta title_smaller'>
                        {Locale.button}
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm
