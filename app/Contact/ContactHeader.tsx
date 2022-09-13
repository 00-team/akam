import React, { FC } from 'react'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored } from 'components'

const ContactHeader: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Contact.header

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
                <Colored {...Locale} />
            </div>
        </div>
    )
}

export { ContactHeader }
