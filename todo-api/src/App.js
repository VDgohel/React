import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

function App() {
  const [locationdata, setlocationdata] = useState()
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => (
      setlocationdata(response.data)
    ));
  }, [])
  return (
    <Container>
      {locationdata ? (
        <Table striped="columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {locationdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default App;
