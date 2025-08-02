import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';

function App() {
  const [locationdata, setlocationdata] = useState()
  useEffect(() => {
    axios.get(`http://localhost:3001/todo`).then((response) => (
      setlocationdata(response.data)
    ));
  }, [])
  let dltbtn = (id) => {
    axios.delete(`http://localhost:3001/todo/${id}`).then(() => {
      setlocationdata(locationdata.filter((item) => item.id !== id))
    });
  }
  let editbtn = (item) => {
    Swal.fire({
      title: "Edit",
      html: `<form>
      <input id="username" value=${item.username} class="form-control mb-3" type="text" placeholder="Enter Username" autofocus/>
      <input id="email" value=${item.email} class="form-control mb-3" type="text" placeholder="Enter Email"/>
      <input id="phone" value=${item.phone} class="form-control" type="text" placeholder="Enter Phone"/>
      </form>`,
      confirmButtonText: "Update",
      showCloseButton: true,
      inputAutoFocus: true,
      preConfirm: () => {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const edititem = { username, email, phone };
        axios.put(`http://localhost:3001/todo/${item.id}`, edititem).then(() => (
          axios.get(`http://localhost:3001/todo`).then((response) => (
            setlocationdata(response.data)
          ))
        ));
      }
    })
  }
  let addbtn = () => {
    Swal.fire({
      title: "Add New",
      html: `<form>
      <input id="username" class="form-control mb-3" type="text" placeholder="Enter Username" autofocus/>
      <input id="email" class="form-control mb-3" type="text" placeholder="Enter Email"/>
      <input id="phone" class="form-control" type="text" placeholder="Enter Phone"/>
      </form>`,
      confirmButtonText: "Add",
      showCloseButton: true,
      inputAutoFocus: true,
      preConfirm: () => {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const newItem = { username, email, phone };
        axios.post(`http://localhost:3001/todo`, newItem).then(() => (
          locationdata.push(newItem),
          setlocationdata([...locationdata])
        ));
      }
    })
  }
  let checkallitem = () => {
    // const allChecked = locationdata.every(item => item.value === true);
    // const updated = locationdata.map(item => ({
    //   ...item,
    //   value: !allChecked
    // }));
    // setlocationdata(updated);
  }
  let checkitem = () => {
  }
  return (
    <Container className='p-4'>
      <div className="d-flex justify-content-between mb-3">
        <h4>Todo List</h4>
        <Button onClick={addbtn} type="submit">Add</Button>
      </div>
      {locationdata ? (
        <Table striped="columns">
          <thead>
            <tr>
              <th><input onChange={checkallitem} type='checkbox'></input></th>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locationdata.map((item) => (
              <tr key={item.id} id={item.id}>
                <td><input type='checkbox' checked={item.value} onChange={checkitem}></input></td>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => editbtn(item)} className='btn btn-primary'>Edit</button>
                  <button onClick={() => dltbtn(item.id)} className='btn btn-danger ms-3'>Delete</button>
                </td>
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
