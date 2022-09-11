import React from 'react'

import HeaderImg from '../../static/imgs/ContactHeader.jpg'

const ContactHeader = () => {
    return (
        <div
            className='contact-header'
            style={{
                backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
    url(${HeaderImg})`,
            }}
        >
            <div className='header-text title_hero'>
                تماس با <span className='colored-word'>آکام</span>
            </div>
        </div>
    )
}

export default ContactHeader
