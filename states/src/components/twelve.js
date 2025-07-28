import React, { useState } from 'react'

export default function Twelve() {
    const [isChecked, setIsChecked] = useState(false)
    const [check, setcheck] = useState('Unchecked')
    let checkthebox = () => {
        if (isChecked) {
            setIsChecked(false)
            setcheck('Unchecked')
        }
        else {
            setIsChecked(true)
            setcheck('Checked')
        }
    }
    return (
        <div>
            <h3>12. Create a component with a checkbox and use state to show "Checked"/"Unchecked"</h3>
            <p><input type='checkbox' onChange={checkthebox}></input>&nbsp;<label>Checkbox is {check}</label></p>
        </div>
    )
}
