
import { Navbar  , Container , Nav } from 'react-bootstrap'
import React from 'react'

function NavBBar(props) {
  return (
    <div>
          <Navbar bg="light" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="#home"> {props.name} </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
       <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBBar
