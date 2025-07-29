import React, { useState } from 'react'

export default function Twentyone() {
    const [mode, setmode] = useState(true)
    const handleToggle = () => {
        setmode(!mode)
        document.body.style.filter = mode ? 'invert(1) hue-rotate(180deg)' : '';
        document.body.style.background = mode ? '#000000' : '#ffffff';
    };
    return (
        <div>
            <h3>21. Create a component with a "Dark Mode" toggle using state to switch between light and dark themes.</h3>
            <div className={mode ? "dark" : "light"}>
                <button onClick={handleToggle}>{mode ? "Dark Mode" : "Light Mode"}</button>
            </div>
        </div>
    )
}
