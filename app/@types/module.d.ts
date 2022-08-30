declare module '*.png'
declare module '*.svg'

interface ErrorData {
    code: number
    title: string
    description: string
}

var ERROR: ErrorData | undefined
