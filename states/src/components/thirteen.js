import React, { useState } from 'react'

export default function Thirteen() {
    const [flag, setflag] = useState(true)
    let readclick = (event) => {
        event.preventDefault()
        setflag(!flag);
    }
    return (
        <div>
            <h3>13. Use a state to show or hide a paragraph when a button is clicked (toggle content). </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span style={{ display: flag ? 'inline' : 'none' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span><a href='' onClick={readclick}>{flag ? 'Read Less' : 'Read More'}</a></p>
        </div>
    )
}
