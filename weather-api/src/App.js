import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [location, setlocation] = useState('Ahmedabad')
  const [locationdata, setlocationdata] = useState()
  let inputchange = (e) => {
    setlocation(e.target.value)
  }

  const search = () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9f2151721c114399a8d61716253007&q=${location}&days=7&aqi=no&alerts=no`).then((response) => {
      setlocationdata(response.data);
      console.log(response.data);
    });
  }
  return (
    <div className="wrapper">
      <div className="card top-bar">
        <input type="text" placeholder="Search location..." className="search-input" value={location} onChange={inputchange} />
        <button className="search-button" onClick={search}>Search</button>
      </div>
      {locationdata && (
        <>
          <div className="card location-card">
            <h1>{locationdata.location.name}, {locationdata.location.region}</h1>
            <p>{locationdata.location.country} • Local Time: {locationdata.location.localtime}</p>
            <p>Updated at: {locationdata.current.last_updated}</p>
            <div className="details">
              <div className="data-pair">
                <div className="data-label">Humidity</div>
                <div className="data-value">{locationdata.current.humidity}%</div>
                <div className="data-label">Cloud Cover</div>
                <div className="data-value">{locationdata.current.cloud}%</div>
              </div>
              <div className="data-pair">
                <div className="data-label">Wind Speed</div>
                <div className="data-value">{locationdata.current.wind_kph} kph</div>
                <div className="data-label">Wind Direction</div>
                <div className="data-value">{locationdata.current.wind_dir} ({locationdata.current.wind_degree}°)</div>
              </div>
              <div className="data-pair">
                <div className="data-label">Pressure</div>
                <div className="data-value">{locationdata.current.pressure_mb} mb</div>
                <div className="data-label">Dew Point</div>
                <div className="data-value">{locationdata.current.dewpoint_c}°C</div>
              </div>
              <div className="data-pair">
                <div className="data-label">Heat Index</div>
                <div className="data-value">{locationdata.current.heatindex_c}°C</div>
                <div className="data-label">UV Index</div>
                <div className="data-value">{locationdata.current.uv}</div>
              </div>
              <div className="data-pair">
                <div className="data-label">Visibility</div>
                <div className="data-value">{locationdata.current.vis_km} km</div>
              </div>
            </div>
          </div>

          <div className="card weather-icon">
            <img src={locationdata.current.condition.icon} alt={locationdata.current.condition.text} />
            <div className="temp">{locationdata.current.temp_c}</div>
            <div className="condition">{locationdata.current.condition.text}</div>
            <p>Feels like: {locationdata.current.feelslike_c}°C</p>
          </div>

          {
            locationdata.forecast.forecastday.map((item, index) => (
              <div key={index} className="card day-icon">
                <img alt="Mist" src={item.day.condition.icon} />
                <div className="day-temp">{item.day.avgtemp_c}</div>
                <div className="day-condition">{item.day.condition.text}</div>
                <p>{item.date}</p>
              </div>
            ))
          }
        </>
      )}
    </div>
  );
}

export default App;
