import React, { useState } from 'react'

export default function Ten() {
    const [num, setnum] = useState(5)
    let decnum = () => {
        setnum(num - 1)
    }
    let incnum = () => {
        setnum(num + 1)
    }
    return (
        <div>
            <h3>10. Create a state called count and add two buttons: + to increase and - to decrease the count.</h3>
            <p><button onClick={decnum}>-</button>&nbsp;<span>{num}</span>&nbsp;&nbsp;<button onClick={incnum}>+</button></p>
        </div>
    )
}
