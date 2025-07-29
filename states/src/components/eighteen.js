import React, { useState } from 'react'

export default function Eighteen() {
    const [cred, setcred] = useState({
        username: "Admin",
        password: "123"
    })
    const [login, setlogin] = useState({
        username: "",
        password: ""
    })
    let handleChange = (e) => {
        const { name, value } = e.target;
        setlogin(prev => ({
            ...prev,
            [name]: value
        }));
    }
    let checkcred = () => {
         if (
            login.username === cred.username &&
            login.password === cred.password
        ) {
            alert("Login successful!");
        } else {
            alert("Invalid credentials");
        }
    }
    return (
        <div>
            <h3>18. Create a simple login form with two input fields and a submit button using state. </h3>
            <div>
                <input
                    type='text'
                    name='username'
                    placeholder='Enter Name'
                    value={login.username}
                    onChange={handleChange}
                />&nbsp;&nbsp;
                <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={login.password}
                    onChange={handleChange}
                />&nbsp;&nbsp;
                <button type='submit' onClick={checkcred}>Login</button>
            </div>
        </div>
    )
}
