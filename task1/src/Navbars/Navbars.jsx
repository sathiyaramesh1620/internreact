import React from 'react'
// import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import  "./Navbar.css"
const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#"><Image src={require('../assets/logo.jpg')} fluid width={100} height={100} roundedCircle></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav  className='justify-content-space-evenly'>
            <Nav.Link href="/home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/about" className='text-light'>About</Nav.Link>
            <Nav.Link href="/link" className='text-success'>Menu</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
    
}

export default Navbars