import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import App from '../App'


type ToDoDisplayProps = {
    toDos: string[]
    onDelete: (task: string) => void
    onEdit: (index: number, newTask: string) => void
}

export default function ToDoDisplay({ toDos, onDelete, onEdit}: ToDoDisplayProps) {
    console.log(toDos);
  
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
                            <td >{task}<button className="btn btn-danger" onClick={() => onDelete(task)}>Delete</button></td>
                        </tr>
            ))}
 
        </tbody>
        </Table>
        </>
  )