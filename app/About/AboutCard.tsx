import React, { FC } from 'react'

import { MemberCardModel } from 'state'

import { Description } from 'components'

const AboutCard: FC<MemberCardModel> = ({ name, role, description }) => {
    return (
        <div className='about-card-container'>
            <div className='card-img'>
                <img src='https://picsum.photos/1920/1080' alt='' />
            </div>
            <div className='card-title title_small'>{name}</div>
            <div className='card-role title_smaller'>{role}</div>
            <div className='card-motto description'>
                <Description text={description} />
            </div>
        </div>
    )
}

export default AboutCard
