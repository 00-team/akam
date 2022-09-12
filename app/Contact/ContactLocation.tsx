import React from 'react'

const ContactLocation = () => {
    return (
        <div className='contact-location'>
            <div className='location-title title'>
                <span className='colored-word'>آکام</span> کجاست؟
            </div>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.3880397272046!2d51.39641651561358!3d35.765843332933606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06f83bbe8435%3A0x2bb0b12f434a3a71!2sSam%20Coffee%20Roasters!5e0!3m2!1sen!2s!4v1662976056552!5m2!1sen!2s'
                width='600'
                height='450'
                style={{ border: 'none' }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    )
}

export default ContactLocation
