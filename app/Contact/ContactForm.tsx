import React, { FC, useRef, useState } from 'react'

import Recaptcha from 'react-google-recaptcha'

import { useAtomValue } from 'jotai'
import { LocaleAtom, SendContact } from 'state'

import { Colored } from 'components'

import ContactPlatforms from './ContactPlatforms'

interface InputRefs {
    first_name: HTMLInputElement | null
    last_name: HTMLInputElement | null
    email: HTMLInputElement | null
    message: HTMLTextAreaElement | null
    captcha: Recaptcha | null
}

const DefaultInputs: InputRefs = {
    first_name: null,
    last_name: null,
    email: null,
    message: null,
    captcha: null,
}

const ContactForm: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.form
    const inputs = useRef<InputRefs>(DefaultInputs)
    const [Response, setResponse] = useState('')

    const Send = async () => {
        if (!inputs.current) return
        const { first_name, last_name, email, message, captcha } =
            inputs.current
        if (!first_name || !last_name || !email || !message || !captcha) {
            return setResponse(Locale.responses['empty'])
        }

        if (
            !/^[\x00-\x7F]*$/.test(email.value) ||
            !/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email.value)
        ) {
            return setResponse(Locale.responses['email'])
        }

        const token = captcha.getValue()

        if (!token) {
            return setResponse(Locale.responses['captcha'])
        }

        const status = await SendContact({
            first_name: first_name.value,
            email: email.value,
            last_name: last_name.value,
            message: message.value,
            recaptcha: token,
        })

        captcha.reset()

        setResponse(Locale.responses[status])
    }

    return (
        <form className='contact-form'>
            <fieldset>
                <legend className='title'>
                    <Colored {...Locale.title} />
                </legend>
                <div className='title-inps'>
                    <div>{Response}</div>
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
                <input
                    className='phone title_smaller'
                    type={'tel'}
                    placeholder='0911 111 1111'
                />

                <ContactPlatforms />

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
                    size={`${innerWidth > 768 ? 'normal' : 'compact'}`}
                    className='captach-container'
                    sitekey='6Lf01QgiAAAAAI6-_ZOgTZAfNa-I0jn2jAzJrMYm'
                    ref={node => {
                        if (node) inputs.current.captcha = node
                    }}
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
