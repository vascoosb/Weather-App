import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import LocationInput from './components/LocationInput';

const API_KEY = '73b137c3e440e93155570a43fda9fbe8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(''); // Store location input

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(`${API_URL}?q=${location}&units=metric&appid=${API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleLocationSubmit = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <LocationInput onLocationSubmit={handleLocationSubmit} />
        {weatherData && <WeatherCard weather={weatherData} />}
      </header>
    </div>
  );
}

export default App;