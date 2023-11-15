import Navigation from "./components/Navigation"
import Container from 'react-bootstrap/Container'
import ToDoForm from './components/ToDoForm'
import ToDoDisplay from "./components/ToDoDisplay"
import { useState } from "react"
import { MouseEventHandler } from "react"
import './App.css'
import AlertMessage from "./components/AlertMessage"
// import ToDoDisplay from './components/ToDoDisplay'

export default function App() {
  const [toDos, setToDos] = useState<string[]>([]);
  
  const [message, setMessage] = useState<string|null>(null)
  // const [category, setCategory] = useState<CategoryType|null>(null)
  
  const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      let form = event.target as HTMLFormElement;
      let task = form.task.value;
      setToDos([...toDos, task])
      form.task.value='';
 }

   const deleteToDo = (taskToDelete: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((task) => task !== taskToDelete)
    })
    alert('DELETED')
    
  }

  const flashMessage = (newMessage:string|null): void => {
    setMessage(newMessage)
   
  }
  // const flashMessage = (newMessage:string|null, newCategory: CategoryType|null): void => {
  //   setMessage(newMessage)
  //   setCategory(newCategory)
  // }

// const handleDeleteClick = (event:React.MouseEventHandler<HTMLElement, 'Click'>): void => {
//   const newtoDos = toDos.filter((task, index) => (
//     index !== index))}
//     setToDos([...toDos, task])

  return (
    <>
      <Navigation username='Mara Jade'/>
      <Container>
        <ToDoForm handleSubmit={handleFormSubmit}/>
        <ToDoDisplay toDos={toDos} onDelete={deleteToDo}/>
        {}
      </Container>
    </>
  )
}

{/* <ToDoDisplay toDos={toDos} onDelete={deleteToDo}/> */}


