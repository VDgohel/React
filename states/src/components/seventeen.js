import React, { useState } from 'react'

export default function Seventeen() {
    const [item, setItem] = useState(["React ", "NodeJs ", "Mern "])
    const [txt, setTxt] = useState()
    let additem = () => {
        item.push(txt)
        setItem([...item])
    }
    return (
        <div>
            <h3>17. Create a list of items using state (array), and add a new item on button click. </h3>
            <div>
                <input type='text' onChange={(e) => setTxt(e.target.value)} /> &nbsp; <button onClick={additem}>Add</button><br></br>
                {item}
            </div>
        </div>
    )
}
