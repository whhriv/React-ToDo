// import React from 'react'
import Container from 'react-bootstrap/Container'
import  Navbar  from 'react-bootstrap/Navbar'

type NavigationProps = {
    username: string
}
const Navigation = ({ username }:NavigationProps) => {
  return (
    <Navbar className='bg-black' data-bs-theme="dark">
        <Container>
            <Navbar.Brand> {username? username : 'New User'}'s ToDo List</Navbar.Brand>
        </Container>
        </Navbar>
  )
}
export default Navigation