
import {Form ,Button, Container } from 'react-bootstrap'

import React from 'react'

function Conactme() {
  return (
    <div>
       <h2>contact Me</h2>
                <Form>
                    <Container>
                     <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full name</Form.Label>
    <Form.Control type="name" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter your Full Name
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder ='Message' />
  </Form.Group>
<Button variant="secondary" type="submit">
    Send
  </Button>
</Container>
</Form>
    </div>
  )
}

export default Conactme

