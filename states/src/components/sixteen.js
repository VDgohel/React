import React, { useState } from 'react'

export default function Sixteen() {
    const [details, setdetails] = useState({
        namee: "",
        email: ""
    })
    let handleChange = (e) => {
        const { name, value } = e.target;
        setdetails(prev => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <div>
            <h3>16. Make a state with an object: name: '', email: '' and update values on input. </h3>
            <div>
                <input name="namee" value={details.namee} onChange={handleChange} /> &nbsp;
                <input name="email" value={details.email} onChange={handleChange} />
                <p>Name: {details.namee} &nbsp;|&nbsp; Email: {details.email}</p>
            </div>
        </div>
    )
} 
