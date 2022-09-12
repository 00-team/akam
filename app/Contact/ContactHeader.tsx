import React, { FC } from 'react'

const ContactHeader: FC = () => {
    return (
        <div
            className='contact-header'
            style={{
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url(/static/image/contact-header.jpg)`,
            }}
        >
            <div className='header-text title_hero'>
                تماس با <span className='colored-word'>آکام</span>
            </div>
        </div>
    )
}

export { ContactHeader }
