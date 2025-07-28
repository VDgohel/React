import React, { useState } from 'react'

export default function Eleven() {
    const [txt, settxt] = useState()
    let liveinput = (event) => {
        settxt(event.target.value)
    }
    return (
        <div>
            <h3>11. Create a simple form with a text input field and use state to show live input.</h3>
            <p>
                <input type='text' onChange={liveinput}></input> &nbsp;&nbsp;
                <span>{txt}</span>
            </p>
        </div>
    )
}
