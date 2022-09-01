import React, { FC } from 'react'

import { ColoredModel, DescriptionModel } from 'state'

const Colored: FC<ColoredModel> = ({ sentence, word }) => {
    let substart = sentence.indexOf(word)

    if (substart === -1) return <>{sentence}</>

    let before = sentence.slice(0, substart)
    let after = sentence.slice(substart + word.length)

    return (
        <>
            {before}
            <span className='colored-word'>{word}</span>
            {after}
        </>
    )
}

const Description: FC<{ text: DescriptionModel }> = ({ text }) => {
    if (Array.isArray(text)) {
        return (
            <>
                {text.map((sentence, index) => (
                    <span className='line' key={index}>
                        {sentence}
                    </span>
                ))}
            </>
        )
    }

    return <>{text}</>
}

export { Colored, Description }
