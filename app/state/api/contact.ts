import axios from 'axios'

interface DataProps {
    first_name: string
    last_name: string
    email: string
    phone: string
    message: string
    platforms: string[]
    recaptcha: string
}

type ResponseTypes = 'success' | 'data' | 'captcha' | 'timeout' | 'unknown'
type SC = (data: DataProps) => Promise<ResponseTypes>

const SendContact: SC = async data => {
    try {
        await axios.post('/api/send_contact/', data)
        return 'success'
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            let data: any = error.response.data
            if (data.error) {
                return data.error
            }
        }
        return 'unknown'
    }
}

export { SendContact }
