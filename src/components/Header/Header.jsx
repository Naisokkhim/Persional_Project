import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../../assets/style/Button.css'

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      bg="white" 
      expand="md" 
      expanded={expanded}
      fixed="top"
      className={`d-flex justify-content-between transition-all ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Navbar.Brand 
        href="#home" 
        style={{color:'black'}} 
        className='mx-5 fw-medium'
      >
        <span className="brand-text">Naisokkhim.me</span>
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-5 d-flex gap-3">
          <Nav.Link href="#home" style={{color:'black'}} onClick={() => setExpanded(false)}>Home</Nav.Link>
          <Nav.Link href="#projects" style={{color:'black'}} onClick={() => setExpanded(false)}>Projects</Nav.Link>
          <Nav.Link href="#contact" style={{color:'black'}} onClick={() => setExpanded(false)}>Contact</Nav.Link>
          <Nav.Link href="#about" style={{color:'black'}} onClick={() => setExpanded(false)}>About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
