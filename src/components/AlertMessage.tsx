import Alert from 'react-bootstrap/Alert'
// import CategoryType from '../types/category'


type AlertMessageProps = {
    message: string|null
    
    flashMessage: (message:string|null) =>void
}

export default function AlertMessage({ message, flashMessage }: AlertMessageProps) {
    return (
        <Alert variant='danger' dismissible onClose={() => flashMessage(null)}>{ message }</Alert>
    )
}