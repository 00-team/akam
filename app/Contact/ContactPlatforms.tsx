import React, { FC, useEffect, useState } from 'react'

import { C } from '@00-team/utils'

import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

interface Props {
    onChange: (platforms: string[]) => void
}

const ContactPlatforms: FC<Props> = ({ onChange }) => {
    const Locale = useAtomValue(LocaleAtom).Contact.form.platforms
    const [Selecteds, setSelecteds] = useState<string[]>([])

    const Toggle = (platform: string) =>
        setSelecteds(s => {
            if (s.includes(platform)) return s.filter(p => p !== platform)
            return [...s, platform]
        })

    const A = (platform: string) => Selecteds.includes(platform)

    useEffect(() => {
        onChange(Selecteds)
    }, [Selecteds])

    return (
        <div className='contact-platform title_smaller'>
            <div className='platform-title title_small'>
                <span className='title-wrapper'>{Locale}</span>
            </div>
            <div className='platforms'>
                <div
                    className={`platform wat ${C(A('whatsapp'))}`}
                    onClick={() => Toggle('whatsapp')}
                >
                    <div className='icon'>
                        <SiWhatsapp size={20} fill='#f2f2f2' />
                    </div>
                    <div className='holder'>Whatsapp</div>
                </div>
                <div
                    className={`platform tel ${C(A('telegram'))}`}
                    onClick={() => Toggle('telegram')}
                >
                    <div className='icon'>
                        <SiTelegram size={20} fill='#f2f2f2' />
                    </div>
                    <div className='holder'>Telegram</div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlatforms
