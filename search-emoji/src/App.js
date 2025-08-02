import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [emg, setemg] = useState()
  const [newemg, setnewemg] = useState()
  const [txt, settxt] = useState('')
  useEffect(() => {
    axios.get("http://localhost:3001/emojis").then((res) => {
      setemg(res.data)
    })
  }, [])
  let inputchange = (e) => {
    settxt(e.target.value)
  }
  const search = () => {
    let newemg = emg.filter((item) => item.tags.join(' ').toLowerCase().includes(txt.toLowerCase()))
    setnewemg(newemg);
  }

  return (
    <div className='card'>
      <div className="">
        <input type="text" placeholder="Search Emoji..." className="search-input" value={txt} onChange={inputchange} />
        <button className="search-button" onClick={search}>Search</button>
      </div>
      {newemg ? (
        <ul>
          {
            newemg.map((item, index) => (
              <li key={index}>
                <img src={`https://www.emoji.family/api/emojis/${item.emoji}/fluent/svg`}></img>
              </li>
            ))
          }
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
