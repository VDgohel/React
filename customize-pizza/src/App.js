import { useState } from 'react';
import './App.css';

function App() {
  const [src, setsrc] = useState()
  const [imgtag,setimgtag] = useState()
  const [img, setimg] = useState([
    {
      name: "base",
      title: "PizzaBase",
      src: "PizzaBase.png"
    },
    {
      name: "basecheese",
      title: "BaseCheese",
      src: "BaseCheese.png"
    },
    {
      name: "basil",
      title: "Basil",
      src: "Basil.png"
    },
    {
      name: "mushroom",
      title: "Mushroom",
      src: "Mushroom.png"
    },
    {
      name: "olive",
      title: "Olive",
      src: "Olive.png"
    },
    {
      name: "pineapple",
      title: "Pineapple",
      src: "Pineapple.png"
    },
    {
      name: "tomato",
      title: "Tomato",
      src: "Tomato.png"
    },
  ])
  let fill = (item) => {
    console.log(item.target.value);
    if (item.target.checked) {
      setsrc((item.target.value) + ".png")
    }
  }
  return (
    <>
      <div className='box'>
        <div className='pizza'>
          <img src={src} />
        </div>
      </div>
      <div className='checkboxlist'>
        {
          img.map((item, index) => (
            <div key={index}>
              <input onClick={fill} type="checkbox" id={item.name} name={item.name} value={item.title} /><label htmlFor={item.name}>{item.title}</label><br></br>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
