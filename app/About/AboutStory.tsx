import React from 'react'

import storySvg from '../../static/svg/about-story.svg'

const AboutStory = () => {
    return (
        <section className='about-story'>
            <div className='svg-container'>
                <object data={storySvg} type=''></object>
            </div>
            <div className='about-story-title-wrapper'>
                <div className='about-story-title title_hero'>
                    <span className='about-story-title-span'>
                        داستان <span className='colored-word'>آکام</span>
                    </span>
                </div>
                <div className='about-story-description title_smaller'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                </div>
            </div>
        </section>
    )
}

export default AboutStory
