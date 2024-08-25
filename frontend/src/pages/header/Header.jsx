import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Not-LoggedIn</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className='nav-link'>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
