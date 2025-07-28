import React, { useState } from 'react'

export default function Nine() {
    const [blb, setblb] = useState(1)
    const [txt, settxt] = useState('On')
    const [clr, setclr] = useState('yellow')
    let flag =()=> {
        if(blb) {
            setblb(0)
            settxt('Off')
            setclr('grey')
        }
        else {
            setblb(1)
            settxt('On')
            setclr('Yellow')
        }
    }
    return (
        <div>
            <h3>9. Write a React component with a button to toggle between "ON" and "OFF".</h3>
            <p><button onClick={flag} style={{ backgroundColor: clr }}>{txt}</button></p>
        </div>
    )
}
