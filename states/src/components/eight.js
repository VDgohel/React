import React, { useState } from 'react'

export default function Eight() {
    const [name, setname] = useState('React')
    let handleClick = (event) => {
        event.preventDefault()
        setname(event.target.innerHTML)
    }
    return (
        <div>
            <h3>8. Build a button that updates and displays a user’s name when clicked.</h3>
            <p>I am Learning {name}</p>
            <button onClick={handleClick}>Frontend</button>&nbsp;&nbsp;<button onClick={handleClick}>Backend</button>&nbsp;&nbsp;<button onClick={handleClick}>Fullstack</button>
        </div>
    )
}
