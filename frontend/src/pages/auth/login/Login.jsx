import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {

  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    email: '',
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
    // console.log("Email: ", formData.email);
    // console.log("Name: ", formData.name);
    // console.log("Password: ", formData.password);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      // console.log(result);
      // store this token, in the session storage
      localStorage.setItem("token", result.token);  
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
    } finally {
      setFormData({
        email: "",
        password: ""
      })
    }
  }

  return (
    <div className='center-form'>
      <Form onSubmit={handleSumbit}>
        <h1>Login</h1>
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
          Login
        </Button>
      </Form>
    </div>
  )
}
