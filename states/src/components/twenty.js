import React, { useState } from 'react'

export default function Twenty() {
    const [counter, setcounter] = useState(0)
    let counterclick = () => {
        setcounter(counter + 1)
        if (counter > 9) {
            setcounter(0)
        }
    }
    return (
        <div>
            <h3>20. Create a counter that resets to 0 after reaching 10. </h3>
            <div>
                <button onClick={counterclick}>Counter</button> {counter} 
            </div>
        </div>
    )
}
