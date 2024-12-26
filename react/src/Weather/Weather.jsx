import React, { useState } from 'react';

const api = {
  Api: "https://api.openweathermap.org/data/2.5/weather",
  key: "0bcafc8ae711aa2ccaad0c114bfa8389"
};

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    fetch(`${api.Api}?q=${search}&appid=${api.key}&units=metric`)
      .then(response => response.json())
      .then(data => {setWeather(data)})
      };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} placeholder="Enter city name"
/>
      <button onClick={handleSearch}>Search</button>
      
      {weather.main!==undefined ? (
        <div>
          <h1>Weather in {weather.name}</h1>
          <p>Temperature: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : <p>Not Found</p>}
    </div>
  );
};

export default Weather;
