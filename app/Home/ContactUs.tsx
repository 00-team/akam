import React, { FC, useState } from 'react'

import { C } from '@00-team/utils'

import { IconType } from '@react-icons/all-files'
import { FaFax } from '@react-icons/all-files/fa/FaFax'
import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity'
import { MdPhoneInTalk } from '@react-icons/all-files/md/MdPhoneInTalk'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

import { IsIntersecting } from 'components'

import ContactSvg from '../../static/svgs/contact.svg'

import './style/contactus.scss'

const ContactUs: FC = () => {
    const [HasIntersected, setHasIntersected] = useState(false)

    return (
        <IsIntersecting
            Tag='section'
            Intersected={HasIntersected}
            setState={setHasIntersected}
            options={{ threshold: 0.5 }}
            className='contact-container'
        >
            <div className={`contact-wrapper ${C(HasIntersected)}`}>
                <div className='contact-title title'>
                    <span className='contact-title-wrapper'>
                        ارتباط با <span className='colored-word'>اکام</span>
                    </span>
                </div>
                <div className='contact-content-wrapper'>
                    <div className='contact-content-title title_hero'>
                        راه های ارتباطی با ما
                    </div>
                    <div className='contact-content'>
                        <div className='contact-columns'>
                            <ContactColumn
                                holder='sadrataghavi1383@gmail.com'
                                className='gmail'
                                Icon={SiGmail}
                                animDeay={0}
                            />
                            <ContactColumn
                                className='phone'
                                holder='09120974956'
                                Icon={MdPhoneInTalk}
                                animDeay={0.3}
                            />
                        </div>
                        <div className='contact-columns'>
                            <ContactColumn
                                className='location'
                                holder='تهران، امیر اباد، خیابان عبداللهی، پلاک 20'
                                Icon={MdLocationCity}
                                animDeay={0.9}
                            />
                            <ContactColumn
                                className='fax'
                                holder='13132546'
                                Icon={FaFax}
                                animDeay={1.2}
                            />
                        </div>
                    </div>
                </div>
                <div className='contact-see-more title_smaller'>
                    <button>
                        <div className='holder'>بیشتر بخوانید</div>
                        <div className='icon'></div>
                    </button>
                </div>
            </div>
            <div className='svg-container'>
                {HasIntersected && <object data={ContactSvg}></object>}
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
