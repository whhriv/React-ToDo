import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import App from '../App'
import CategoryType from '../types/category'
import AlertMessage from './AlertMessage'

type ToDoDisplayProps = {
    toDos: string[]
    onDelete: (task: string) => void
    onEdit: (index: number, newTask: string) => void
}

export default function ToDoDisplay({ toDos, onDelete, onEdit}: ToDoDisplayProps) {
    console.log(toDos);
    const [editableIndex, setEditableIndex] = useState<number | null>(null)
    const [editedTask, setEditedTask] = useState<string>('')

    const [message, setMessage] = useState<string|null>(null)
    const [category, setCategory] = useState<CategoryType|null>(null)
  
    const handleEditStart = (index: number, task:string) => {
        setEditableIndex(index)
        setEditedTask(task)
       
    }

    const handleEditCancel = () => {
        setEditableIndex(null)
        setEditedTask('')
        
    }
    const handleEditSave = (index: number) => {
        onEdit(index, editedTask)
        setEditableIndex(null)
        setEditedTask('')
       
    }
    // const flashMessage = (newMessage:string|null, newCategory:CategoryType|null): void => {
    //     setMessage(newMessage)
    //     setCategory(newCategory)
    //   }
    const flashMessage = (newMessage:string|null): void => {
        setMessage(newMessage)
       
      }

    return (
    <>
    <h1 className="text-center mt-3 ">To Do List</h1>
    <Table className="bg-black" data-bs-theme="dark" striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {toDos.map((task, index) => (
                            <tr key={task}>
                            <td>{index + 1}</td>
                            <td >
                                {editableIndex === index ? (
                                    <>
                                    <input type="text"
                                     value={editedTask}
                                      onChange={(e) => setEditedTask(e.target.value)}/>
                                   
                                   <button className="btn btn-success"
                                    onClick={() => handleEditSave(index)}>
                                        Save</button>

                                    <button className="btn btn-secondary"
                                    onClick={handleEditCancel}>Cancel</button>
                                   
                                    </>
                                ) : (
                                    <>
                                    {task}
                                    <button className="btn btn-danger"
                                    onClick={() => onDelete(task)}>
                                        DELETE</button>
                                        <AlertMessage message='DELETED' category={category} flashMessage={flashMessage}/>
                                       
                                        <button className="btn btn-primary"
                                    onClick={() => 
                                    handleEditStart(index, task)}>
                                        Edit</button>
                                    </>
                                    
                                )}
                                    
                                    </td>
                        </tr>
            ))}
 
        </tbody>
        </Table>
        </>
  )
}
// onClick={() => ({task}, e.target) deleteToDo({task})} 
{/* <button className="btn btn-danger">Delete</button> */}
{/* <Button className='v-100' variant='danger' type='submit'>DELETE</Button></td> */}