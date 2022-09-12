import React from 'react'

const ContactForm = () => {
    return (
        <form className='contact-form '>
            <fieldset>
                <legend className='title'>
                    پیام مستقیم به <span className='colored-word'>آکام؟</span>
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
                    <button className='cta title_smaller'>ارسال</button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm
