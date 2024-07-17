import React, { useState } from 'react';

function LocationInput({ onLocationSubmit }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location (e.g., City, Country)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default LocationInput;