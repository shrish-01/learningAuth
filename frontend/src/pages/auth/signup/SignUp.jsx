import { Button, Form } from 'react-bootstrap';
import "./SignUp.css";
import { useState } from 'react';

export const SignUp = () => {

  const [ formData, setFormData ] = useState({
    email: '',
    name: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSumbit = async(e) => {
    e.preventDefault();
    console.log("Email: ", formData.email);
    console.log("Name: ", formData.name);
    console.log("Password: ", formData.password);
  }

  return (
    <div className='center-form'>
      <Form onSubmit={handleSumbit}>
        <h1>Sign Up</h1>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type='email'
            name='email'
            placeholder='Enter mail'
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name address</Form.Label>
          <Form.Control 
            type='text'
            name='name'
            placeholder='Enter name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password address</Form.Label>
          <Form.Control 
            type='text'
            name='password'
            placeholder='Enter password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant='dark' type='submit' className='w-100'>
          Signup
        </Button>
      </Form>
    </div>
  )
}
