import React, { useState } from 'react'

export default function Six() {
    const [age, setage] = useState("25")
  return (
    <div>
        <h3>6. Declare a state variable named age with an initial value of 25. </h3>
        <p>The default age is {age}</p>
    </div>
  )
}
