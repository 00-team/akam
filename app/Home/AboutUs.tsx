import React, { FC } from 'react'

import { IconType } from '@react-icons/all-files'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'

import aboutSvg from '../../static/svgs/about.svg'

import './style/aboutus.scss'

const AboutUs = () => {
    return (
        <section className='about-container' id='about'>
            <div className='svg-container'>
                <object data={aboutSvg} type=''></object>
            </div>
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
                                className='trust'
                                title='اعتماد'
                                description='عملیات ها به طور موثر اجرا می شود و این شرکت یک پیشرو در صنعت است.  آکام با عرضه های اصیل و متمایز خود به رشد و توسعه خود ادامه می دهد... '
                            />
                            <AboutContent
                                Svg={FaHandshake}
                                title='اعتماد'
                                description='عملیات ها به طور موثر اجرا می شود و این شرکت یک پیشرو در صنعت است.  آکام با عرضه های اصیل و متمایز خود به رشد و توسعه خود ادامه می دهد... '
                            />
                        </div>
                        <div className='contents-wrapper'>
                            <AboutContent
                                Svg={FaGlobe}
                                className='innovation'
                                title='نواوری'
                                description='اکام  با  پذیرفتن راه‌های جدید آینده، به نوآوری و برتری خود از طریق محصولات، خدمات و رویکرد مشتری‌محور معتبر و بی‌رقیب خود ادامه می دهد و برای مشتریان  کالایی با کیفیت بالا و بی رقیب ارائه می دهد 
                            '
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
        </section>
    )
}

interface AboutContentProps {
    Svg: IconType
    className?: string
    title: string
    description: string
}

const AboutContent: FC<AboutContentProps> = ({
    Svg,
    title,
    description,
    className,
}) => {
    return (
        <div className='about-content'>
            <div className={`about-svg ${className && className}`}>
                <Svg size={30} />
            </div>
            <div className='about-title title_small'>{title}</div>
            <div className='about-description description'>{description}</div>
            <button className='about-see-more description'>ادامه مطلب</button>
        </div>
    )
}

export default AboutUs
