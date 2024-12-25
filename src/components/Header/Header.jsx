import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../../assets/style/Button.css'
export default function Header() {
  return (
    <Navbar bg="white" className='d-flex justify-content-between '>
      <Navbar.Brand href="#home" style={{color:'black' }} className='mx-5 fw-medium '>Naisokkhim.me</Navbar.Brand>
      <Nav className="mr-auto mx-5 d-flex gap-3">
        <Nav.Link href="#home" style={{color:'black'}}>Home</Nav.Link>
        <Nav.Link href="#features" style={{color:'black'}}>Projects</Nav.Link>
        <Nav.Link href="#pricing" style={{color:'black'}}>Contact</Nav.Link>
        <Nav.Link href="#pricing" style={{color:'black'}} >About Me</Nav.Link>
      </Nav>
    </Navbar>
  )
}
