import React from 'react'

const AboutHeader = () => {
    return (
        <div
            className='about-header'
            style={{
                backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/static/image/contact-header.jpg)`,
            }}
        >
            <div className='header-text title_hero'>
                درباره <span className='colored-word'>آکام</span>
            </div>
        </div>
    )
}

export default AboutHeader
