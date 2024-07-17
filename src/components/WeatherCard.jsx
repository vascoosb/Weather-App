import React from 'react';

function WeatherCard({ weather }) {
  const { main, weather: weatherDetails, name } = weather;
  const { temp, humidity } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div className="WeatherCard">
      <h2>{name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
        />
        <p>{description}</p>
      </div>
      <p>Temperature: {temp} °C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
}

export default WeatherCard;