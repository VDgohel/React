import React, { useState } from 'react'

export default function Nighteen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>19. Use multiple useState hooks to manage separate pieces of data in one component.</h3>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br /><br />

            <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            /><br /><br />

            <button onClick={handleClick}>Click Me</button>

            <p>Name: {name} | Age: {age} | Clicks: {count}</p>
        </div>
    );
}
