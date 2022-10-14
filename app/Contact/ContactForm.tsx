import React, { FC, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle'
import { MdErrorOutline } from '@react-icons/all-files/md/MdErrorOutline'

import Recaptcha from 'react-google-recaptcha'

import { useAtomValue } from 'jotai'
import { LocaleAtom, SendContact } from 'state'

import { Colored } from 'components'

import ContactPlatforms from './ContactPlatforms'

interface InputRefs {
    first_name: HTMLInputElement | null
    last_name: HTMLInputElement | null
    email: HTMLInputElement | null
    phone: HTMLInputElement | null
    company: HTMLInputElement | null
    message: HTMLTextAreaElement | null
    platforms: string[]
    captcha: Recaptcha | null
}

const DefaultInputs: InputRefs = {
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    company: null,
    message: null,
    platforms: [],
    captcha: null,
}

const ContactForm: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.form
    const inputs = useRef<InputRefs>(DefaultInputs)
    // Response = [message, is_error]
    const [Response, setResponse] = useState(['', false])

    const Send = async () => {
        if (!inputs.current) return

        const { first_name, last_name, email, phone } = inputs.current
        const { message, platforms, captcha, company } = inputs.current

        if (
            !first_name ||
            !last_name ||
            !email ||
            !phone ||
            !company ||
            !message ||
            !captcha
        ) {
            return setResponse([Locale.responses['empty'], true])
        }

        if (
            !/^[\x00-\x7F]*$/.test(email.value) ||
            !/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email.value)
        ) {
            return setResponse([Locale.responses['email'], true])
        }

        const token = captcha.getValue()

        if (!token) {
            return setResponse([Locale.responses['captcha'], true])
        }

        const status = await SendContact({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            message: message.value,
            platforms: platforms,
            recaptcha: token,
        })

        captcha.reset()

        setResponse([Locale.responses[status], status !== 'success'])
    }

    return (
        <form className='contact-form'>
            <fieldset>
                <legend className='title'>
                    <Colored {...Locale.title} />
                </legend>
                <div
                    className={`form-error title_small ${C(Response[0])} ${
                        Response[1] ? 'error' : 'success'
                    }`}
                >
                    <div className='icon'>
                        {Response[1] ? (
                            <MdErrorOutline size={24} />
                        ) : (
                            <FaCheckCircle size={24} />
                        )}
                    </div>
                    <div className='holder'>{Response[0]}</div>
                </div>
                <div className={`title-inps ${C(Response[0])}`} id='top'>
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
                <div className='title-inps'>
                    <input
                        className='phone title_smaller'
                        type='tel'
                        placeholder={Locale.phone}
                        ref={node => {
                            if (node) inputs.current.phone = node
                        }}
                    />
                    <input
                        className='title_smaller'
                        type='text'
                        placeholder={Locale.company}
                        ref={node => {
                            if (node) inputs.current.company = node
                        }}
                    />
                </div>

                <ContactPlatforms
                    onChange={platforms =>
                        (inputs.current.platforms = platforms)
                    }
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
