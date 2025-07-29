import React, { useState } from 'react'

export default function TwentyTwo() {
    const [num, setnum] = useState(0)
    const [que, setque] = useState([
        {
            id: "1",
            title: "1. What is React?"
        }, {
            id: "2",
            title: "2. What is JS?"
        }, {
            id: "3",
            title: "3. What is HTML?"
        },
    ])
    let nextque = () => {
        if (num < que.length - 1) {
            setnum(num + 1)
        }
    }
    let prevque = () => {
        if (num > 0) {
            setnum(num - 1)
        }
    }
    return (
        <div>
            <h3>22. Build a quiz component that shows one question at a time and uses state to track the
                current question number.</h3>
            <div className='que'>
                {
                    <div>{que[num].title}</div>
                }
                <br></br>
                <button onClick={prevque}>Prev</button>&nbsp;
                <button onClick={nextque}>Next</button>
            </div>
        </div>
    )
}
