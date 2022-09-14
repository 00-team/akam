import React, { FC } from 'react'

interface AboutCardProps {
    // imgUrl: string
    title: string
    role: string
    motto: string
}

const AboutCard: FC<AboutCardProps> = ({ role, title, motto }) => {
    return (
        <div className='about-card-container'>
            <div className='card-img'>
                <img src='https://picsum.photos/1920/1080' alt='' />
            </div>
            <div className='card-title title_small'>{title} </div>
            <div className='card-role title_smaller'>{role} </div>
            <div className='card-motto description'>{motto}</div>
        </div>
    )
}

export default AboutCard
