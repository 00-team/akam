import React, { FC } from 'react'

interface ColoredProps {
    text: string
    subtext: string
}

const Colored: FC<ColoredProps> = ({ text, subtext }) => {
    let substart = text.indexOf(subtext)

    if (substart === -1) return <>{text}</>

    let before = text.slice(0, substart)
    let after = text.slice(substart + subtext.length)

    return (
        <>
            {before}
            <span className='colored-word'>{subtext}</span>
            {after}
        </>
    )
}

const Description: FC<{ text: string | string[] }> = ({ text }) => {
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
