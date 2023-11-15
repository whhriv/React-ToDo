import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'


type ToDoFormProps = {
    handleSubmit: (e:React.FormEvent) => void
}

export default function ToDoForm({handleSubmit}:ToDoFormProps) {
  return (

    <Card data-bs-theme="dark" >
        <Card.Body>
    <Form onSubmit={handleSubmit}>
        <Form.Label>Tasks</Form.Label>
        <Form.Control type='text' placeholder='TELL ME YOUR TASK' name='task'/>
        <Button className='v-100 mt-3' variant='primary' type='submit'> ADD TASK</Button>
    </Form>
    </Card.Body>
    </Card>
  )
}




