import React, { useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import './style/selling.scss'

const loremSmaple = (
    <>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
        و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
        مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </>
)

const Selling = () => {
    const container = useRef<HTMLDivElement>(null)
    const [Isintersected, setIsintersected] = useState(false)

    useEffect(() => {
        if (container.current && !Isintersected) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setIsintersected && setIsintersected(true)
                        observer.disconnect()
                    }
                },
                {
                    rootMargin: '-100px',
                }
            )

            observer.observe(container.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [container])

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
            <section className='selling-wrapper'>
                <div className='sell-column' ref={container}>
                    <div className={`sell-img ${C(Isintersected)}`}>
                        <img
                            loading='lazy'
                            src='https://picsum.photos/1920/1080'
                            alt=''
                        />
                    </div>
                    <div className='sell-description title_smaller'>
                        {loremSmaple}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Selling
