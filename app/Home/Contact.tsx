import React, { FC, useState } from 'react'

import { C } from '@00-team/utils'

import { IconType } from '@react-icons/all-files'
import { FaFax } from '@react-icons/all-files/fa/FaFax'
import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity'
import { MdPhoneInTalk } from '@react-icons/all-files/md/MdPhoneInTalk'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

import { Link } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { LocaleAtom } from 'state'

import { Colored, IsIntersecting } from 'components'

import './style/contactus.scss'

const ContactUs: FC = () => {
    const Locale = useAtomValue(LocaleAtom).Home.contact
    const [HasIntersected, setHasIntersected] = useState(false)

    return (
        <IsIntersecting
            Tag='section'
            id='contact'
            Intersected={HasIntersected}
            setState={setHasIntersected}
            options={{ threshold: 0.5 }}
            className='contact-container'
        >
            <div className={`contact-wrapper ${C(HasIntersected)}`}>
                <div className='contact-title title'>
                    <span className='contact-title-wrapper'>
                        <Colored {...Locale.doom} />
                    </span>
                </div>
                <div className='contact-content-wrapper'>
                    <div className='contact-content-title title_hero'>
                        {Locale.title}
                    </div>
                    <div className='contact-content'>
                        <div className='contact-columns'>
                            <ContactColumn
                                holder={Locale.gmail}
                                className='gmail'
                                Icon={SiGmail}
                                animDeay={0}
                            />
                            <ContactColumn
                                className='phone'
                                holder={Locale.phone}
                                Icon={MdPhoneInTalk}
                                animDeay={0.3}
                            />
                        </div>
                        <div className='contact-columns'>
                            <ContactColumn
                                className='location'
                                holder={Locale.location}
                                Icon={MdLocationCity}
                                animDeay={0.9}
                            />
                            <ContactColumn
                                className='fax'
                                holder={Locale.fax}
                                Icon={FaFax}
                                animDeay={1.2}
                            />
                        </div>
                    </div>
                </div>
                <div className='contact-see-more title_smaller'>
                    <Link to={'contact'}>
                        <button>
                            <div className='holder'>{Locale.button}</div>
                            <div className='icon'></div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='svg-container'>
                {HasIntersected && <object data='/static/svg/contact.svg' />}
            </div>
        </IsIntersecting>
    )
}

interface ContactColumnProps {
    Icon: IconType
    holder: string
    className?: string
    animDeay: number
}

const ContactColumn: FC<ContactColumnProps> = ({
    holder,
    Icon,
    className,
    animDeay,
}) => {
    return (
        <div
            className={`contact-column title_smaller ${className && className}`}
            style={{ animationDelay: `${animDeay + 2}s` }}
        >
            <div className='column-icon'>
                <Icon size={25} />
            </div>
            <div className='column-holder'>{holder}</div>
        </div>
    )
}

export default ContactUs
