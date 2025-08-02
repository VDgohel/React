import { useState } from 'react';
import './App.css';

function App() {
  const [src, setsrc] = useState([]);
  const [imgtag, setimgtag] = useState('');
  const [price, setprice] = useState(0);
  const [img, setimg] = useState([
    { name: "pizzabase", title: "PizzaBase", price: "500" },
    { name: "basecheese", title: "BaseCheese", price: "100" },
    { name: "basil", title: "Basil", price: "50" },
    { name: "mushroom", title: "Mushroom", price: "80" },
    { name: "olive", title: "Olive", price: "70" },
    { name: "pineapple", title: "Pineapple", price: "90" },
    { name: "tomato", title: "Tomato", price: "30" },
  ]);

  const fill = (e, item, index) => {
    let newsrc;
    if (e.target.checked) {
      newsrc = [...src, `<img src="${item.name}.png" id="${index}" style="z-index:${index}" />`];
      setsrc(newsrc);
      setprice(price + Number(item.price));
      setimgtag(newsrc.join(""));
    } else {
      newsrc = src.filter(imgTag => !imgTag.includes(`id="${index}"`));
      setsrc(newsrc);
      setprice(price - Number(item.price));
      setimgtag(newsrc.join(""));
    }
  };

  return (
    <>
      <div className='app'>
        <div className='box'>
          <div className='pizza' dangerouslySetInnerHTML={{ __html: imgtag }}></div>
        </div>
        <div className="checkboxlist">
          {img.map((item, index) => (
            <div className="checkbox-item" key={index}>
              <input
                type="checkbox"
                id={item.name}
                name={item.name}
                value={item.name}
                onChange={(e) => fill(e, item, index)}
              />
              <label htmlFor={item.name}>{item.title} - ₹{item.price}</label>
            </div>
          ))}
          <div style={{ marginTop: "10px" }}>
            <strong>Total: ₹{price}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
