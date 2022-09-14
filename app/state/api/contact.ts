import axios from 'axios'

interface DataProps {
    first_name: string
    last_name: string
    email: string
    message: string
    recaptcha: string
}

const SendContact = async (data: DataProps) => {
    const response = await axios.post('/api/send_contact', data)
    console.log(response)
}

export { SendContact }
