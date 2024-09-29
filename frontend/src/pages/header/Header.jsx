import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

export const Header = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login") 
  }

  return (
    <>
      <Navbar bg={token ? "primary" : "dark"} variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to="">{token ? "LoggedIn" : "Not-LoggedIn"}</Navbar.Brand>
          <Nav className="ml-auto">
            { token ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className='nav-link'>Dashboard</Nav.Link>
                <Nav.Link className='nav-link' onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className='nav-link'>Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
