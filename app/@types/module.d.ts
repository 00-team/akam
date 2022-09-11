declare module '*.png'
declare module '*.svg'
declare module '*.jpg'

interface ErrorData {
    code: number
    title: string
    description: string
}

var ERROR: ErrorData | undefined
