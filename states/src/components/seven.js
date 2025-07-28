import React, { useState } from 'react'

export default function Seven() {
    const [age, setage] = useState(25)
    let increaseAge = () => {
        setage(age + 1)
    }
    return (
        <div>
            <h3>7. Create a function called increaseAge() to increase age by 1. </h3>
            <p>The age is {age} <button onClick={increaseAge}>Increase</button></p>
        </div>
    )
}
