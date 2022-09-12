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
                    <form className='contact-form '>
                        <fieldset>
                            <legend className='title'>
                                پیام مستقیم به{' '}
                                <span className='colored-word'>آکام؟</span>
                            </legend>
                            <div className='title-inps'>
                                <input
                                    type='text'
                                    className='name title_smaller'
                                    name='name'
                                    placeholder='نام'
                                />
                                <input
                                    type='text'
                                    className='lastname title_smaller'
                                    name='lastname'
                                    placeholder='نام خانوادگی'
                                />
                            </div>
                            <input
                                type='text'
                                className='gmail title_smaller'
                                placeholder='example@gmail.com'
                                name='gmail'
                            />
                            <textarea
                                placeholder='متن پیام...'
                                className='title_smaller'
                                name='message'
                                cols={30}
                                rows={10}
                            ></textarea>
                            <div className='cta-wrapper'>
                                <button className='cta title_smaller'>
                                    ارسال
                                </button>
                            </div>
                        </fieldset>
                    </form>
                    <div className='contact-location'></div>
                </div>
            </div>
        </section>
    )
}

export default Contact
