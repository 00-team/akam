import React, { FC, useRef, useState } from 'react'

import Recaptcha from 'react-google-recaptcha'

import { useAtomValue } from 'jotai'
import { LocaleAtom, SendContact } from 'state'

import { Colored } from 'components'

interface InputRefs {
    first_name: HTMLInputElement | null
    last_name: HTMLInputElement | null
    email: HTMLInputElement | null
    message: HTMLTextAreaElement | null
}

const DefaultInputs: InputRefs = {
    first_name: null,
    last_name: null,
    email: null,
    message: null,
}

const ContactForm: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.form
    const [token, setToken] = useState<string | null>(null)
    const inputs = useRef<InputRefs>(DefaultInputs)

    const Send = () => {
        if (!inputs.current) return
        const { first_name, last_name, email, message } = inputs.current
        if (!first_name || !last_name || !email || !message || !token) return

        SendContact({
            first_name: first_name.value,
            email: email.value,
            last_name: last_name.value,
            message: message.value,
            recaptcha: token,
        })
    }

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
                        ref={node => {
                            if (node) inputs.current.first_name = node
                        }}
                    />
                    <input
                        type='text'
                        className='lastname title_smaller'
                        name='lastname'
                        placeholder={Locale.last_name}
                        ref={node => {
                            if (node) inputs.current.last_name = node
                        }}
                    />
                </div>
                <input
                    type='text'
                    className='gmail title_smaller'
                    name='gmail'
                    placeholder={Locale.email}
                    ref={node => {
                        if (node) inputs.current.email = node
                    }}
                />
                <textarea
                    className='title_smaller'
                    name='message'
                    cols={30}
                    rows={10}
                    placeholder={Locale.message}
                    ref={node => {
                        if (node) inputs.current.message = node
                    }}
                ></textarea>
                <Recaptcha
                    sitekey='6LdtbPchAAAAAHnA1I7gwa_mKl5sWh-jWe6daYif'
                    onChange={token => setToken(token)}
                    onExpired={() => setToken(null)}
                />
                <div className='cta-wrapper'>
                    <button
                        className='cta title_smaller'
                        onClick={e => {
                            e.preventDefault()
                            Send()
                        }}
                    >
                        {Locale.button}
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm
