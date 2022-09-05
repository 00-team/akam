import React, { FC, useState } from 'react'

import { C } from '@00-team/utils'

import { IconType } from '@react-icons/all-files'
import { FaFax } from '@react-icons/all-files/fa/FaFax'
import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity'
import { MdPhoneInTalk } from '@react-icons/all-files/md/MdPhoneInTalk'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

import IsIntersecting from 'components/IsIntersecting'

import ContactSvg from '../../static/svgs/contact.svg'

import './style/contactus.scss'

const ContactUs = () => {
    const [HasIntersected, setHasIntersected] = useState(false)
    return (
        <section className='contact-container'>
            <IsIntersecting
                Tag={'section'}
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
                                />
                                <ContactColumn
                                    className='phone'
                                    holder='09120974956'
                                    Icon={MdPhoneInTalk}
                                />
                            </div>
                            <div className='contact-columns'>
                                <ContactColumn
                                    className='location'
                                    holder='تهران، امیر اباد، خیابان عبداللهی، پلاک 20'
                                    Icon={MdLocationCity}
                                />
                                <ContactColumn
                                    className='fax'
                                    holder='13132546'
                                    Icon={FaFax}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='contact-see-more'>
                        <button>see more</button>
                    </div>
                </div>
                <div className='svg-container'>
                    {HasIntersected && <object data={ContactSvg}></object>}
                </div>
            </IsIntersecting>
        </section>
    )
}

interface ContactColumnProps {
    Icon: IconType
    holder: string
    className?: string
}

const ContactColumn: FC<ContactColumnProps> = ({ holder, Icon, className }) => {
    return (
        <div
            className={`contact-column title_smaller ${className && className}`}
        >
            <div className='column-icon'>
                <Icon size={25} />
            </div>
            <div className='column-holder'>{holder}</div>
        </div>
    )
}

export default ContactUs
