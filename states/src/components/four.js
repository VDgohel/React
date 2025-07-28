import React, { useState } from 'react'

export default function Four() {
    const [first, setfirst] = useState("React")
    const [second, setsecond] = useState("states")
    return (
        <div>
            <h3>4. Can we use multiple useState() hooks in one component? Explain with an example.</h3>
            <p>My is my practice of {first} {second}</p>
        </div>
    )
}
