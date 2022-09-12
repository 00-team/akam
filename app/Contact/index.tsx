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
                                    className='name title_small'
                                    name='name'
                                    placeholder='نام'
                                />
                                <input
                                    type='text'
                                    className='lastname title_small'
                                    name='lastname'
                                    placeholder='نام خانوادگی'
                                />
                            </div>
                            <input
                                type='text'
                                className='gmail title_small'
                                name='gmail'
                            />
                            <textarea
                                className='title_small'
                                name='message'
                                cols={30}
                                rows={10}
                            ></textarea>
                        </fieldset>
                    </form>
                    <div className='contact-location'></div>
                </div>
            </div>
        </section>
    )
}

export default Contact
