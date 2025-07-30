import React, { useEffect } from 'react'
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { motion } from "motion/react"

function App() {
  const [info, setinfo] = useState("Ahmedabad")
  const [infodata, setinfodata] = useState([])
  const [tododata, settododata] = useState([])
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  }
  useEffect(() => {
    // axios.get(`http://api.weatherapi.com/v1/current.json?key=9f2151721c114399a8d61716253007&q=${info}'&aqi=no`).then((response) => (
    //   console.log(response.data.location.name)
    // ))
  }, [])

  let checkname = (e) => {
    setinfo(e.target.value)
  }
  let addloc = () => {
    console.log(info);
    axios.get(`http://api.weatherapi.com/v1/current.json?key=9f2151721c114399a8d61716253007&q=${info}'&aqi=no`).then((response) => (
      console.log(response.data),
      setinfodata(JSON.stringify(response.data, null, '\t'))
    ))
  }
  let addtodo = () => {
    axios.get('https://dummyjson.com/todos').then((response) => (
      console.log(response.data.todos),
      settododata(JSON.stringify(response.data.todos, null, '\t'))
    ))
  }
  return (
    <div>
      <input type='text' value={info} onChange={checkname} />
      <button onClick={addloc}>Add Location</button>
      <p>{infodata}</p>
      <button onClick={addtodo}>Todo API</button>
      <p>{tododata}</p>
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default App;
