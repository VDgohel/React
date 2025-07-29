import React, { useState } from 'react'

export default function TwentyFour() {
    const [str, setstr] = useState([
        "☆", "☆", "☆", "☆", "☆"
    ])
    let fillstr = (e) => {
        let newStars = [];
        const index = parseInt(e.target.id);
        for (let i = 0; i < str.length; i++) {
            if (i <= index) {
                newStars.push("★");
            } else {
                newStars.push("☆");
            }
        }
        setstr(newStars);
    }
    return (
        <div>
            <h3>24. Build a star rating system where clicking on a star updates the rating in state</h3>
            <div className='star'>
                <p>Ratings</p>
                {
                    str.map((item, index) => (
                        <span key={index} id={index} onClick={fillstr}>{item}</span>
                    ))
                }
            </div>
        </div>
    )
}
