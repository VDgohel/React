import React, { useState } from 'react'

export default function Fourteen() {
  const [like, setlike] = useState(0)
  let likeclick = () => {
    setlike(like + 1)
  }
  return (
    <div>
      <h3>14. Create a likes state and a button that increases likes by 1 on each click. </h3>
      <p><button onClick={likeclick}><span style={{ color: "red" }}>&#10084;</span></button> {like} Likes</p>
    </div>
  )
}
