import React, { useState } from 'react'

export default function TwentyThird() {
    const [num, setnum] = useState(0)
    const [intervalId, setIntervalId] = useState(null);
    let startwatch = () => {
    }
    let stopwatch = () => {
       
    }
    let resetwatch = () => {

    }
    return (
        <div>
            <h3>23. Use state to create a simple stopwatch with Start, Stop, and Reset buttons.</h3>
            <div>
                <p></p>
                <button onClick={startwatch}>Start</button> &nbsp;&nbsp;
                <button onClick={stopwatch}>Stop</button> &nbsp;&nbsp;
                <button onClick={resetwatch}>Reset</button> &nbsp;&nbsp;
            </div>
        </div>
    )
}
