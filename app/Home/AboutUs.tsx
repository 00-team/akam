import React, { FC } from 'react'

import { IconType } from '@react-icons/all-files'
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'
import { SiAtom } from '@react-icons/all-files/si/SiAtom'

import aboutSvg from '../../static/svgs/about.svg'

import './style/aboutus.scss'

const AboutUs = () => {
    return (
        <section className='about-container' id='about'>
            <div className='about-wrapper'>
                <div className='about-title title'>
                    <span className='span-wrapper'>
                        چرا <span>آکام؟</span>
                    </span>
                </div>
                <div className='about-content'>
                    <div className='content-title section_title'>درباره ما</div>
                    <div className='about-contents'>
                        <div className='contents-wrapper'>
                            <AboutContent
                                Svg={FaHandshake}
                                title='اعتماد'
                                description='عملیات ها به طور موثر اجرا می شود و این شرکت یک پیشرو در صنعت است.  آکام با عرضه های اصیل و متمایز خود به رشد و توسعه خود ادامه می دهد... '
                            />
                            <AboutContent
                                Svg={SiAtom}
                                title='نو آوری'
                                description='اکام  با  پذیرفتن راه‌های جدید آینده، به نوآوری و برتری خود از طریق محصولات، خدمات و رویکرد مشتری‌محور معتبر و بی‌رقیب خود ادامه می دهد و برای مشتریان  کالایی با کیفیت بالا و بی رقیب ارائه می دهد 
                                '
                            />
                        </div>
                        <div className='contents-wrapper'>
                            <AboutContent
                                Svg={FaHandshake}
                                title='اعتماد'
                                description='عملیات ها به طور موثر اجرا می شود و این شرکت یک پیشرو در صنعت است.  آکام با عرضه های اصیل و متمایز خود به رشد و توسعه خود ادامه می دهد... '
                            />
                            <AboutContent
                                Svg={FaHandshake}
                                title='اعتماد'
                                description='عملیات ها به طور موثر اجرا می شود و این شرکت یک پیشرو در صنعت است.  آکام با عرضه های اصیل و متمایز خود به رشد و توسعه خود ادامه می دهد... '
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='svg-container'>
                <object data={aboutSvg} type=''></object>
            </div>
        </section>
    )
}

interface AboutContentProps {
    Svg: IconType
    title: string
    description: string
}

const AboutContent: FC<AboutContentProps> = ({ Svg, title, description }) => {
    return (
        <div className='about-content'>
            <div className='about-svg'>
                <Svg size={30} />
            </div>
            <div className='about-title title_small'>{title}</div>
            <div className='about-description description'>{description}</div>
            <div className='see-more'>
                <button>ادامه مطلب</button>
            </div>
        </div>
    )
}

export default AboutUs
