import React from 'react'

import './style/selling.scss'

const Selling = () => {
    return (
        <main className='selling-container'>
            <header
                className='selling-header'
                style={{
                    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/static/image/contact-header.jpg)`,
                }}
            >
                <div className='header-text title_hero'>
                    استراتژی های فروش <span className='colored-word'>آکام</span>
                </div>
            </header>
            <section className='selling-wrapper'></section>
        </main>
    )
}

export default Selling
