import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export const Dashboard = () => {

  const token = localStorage.getItem("token");
  const [ users, setUsers ] = useState([]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          // If the response status is not OK, throw an error
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        // console.log(transformedResponse);
        if (Array.isArray(result)) {
          setUsers(result);
        } else {
          setError("Unexpected data format from server");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if(token) {
      fetchUsers();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className='text-center'>Dashboard</h1>
          <Table striped bordered hover responsive>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
