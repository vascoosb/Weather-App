# Weather App

Welcome to the Weather App project! This web application allows users to check the current weather conditions for any location using the OpenWeather API.

## Project Overview

The Weather App is built using React.js and integrates with the OpenWeather API to fetch real-time weather data. Users can input a city name and view the current weather details including temperature, humidity, wind speed, and weather description.

### Features

- **Search by City:** Users can enter the name of a city to fetch weather data.
- **Real-time Updates:** Weather information updates dynamically based on user input.
- **Responsive Design:** The app is designed to work seamlessly across desktop and mobile devices.

### Technologies Used

- React.js
- HTML5
- CSS3
- OpenWeather API

## Setup Instructions

To run this project locally on your machine, follow these steps:

```bash
# Clone the repository and navigate to the project directory
git clone https://github.com/your-username/Weather-App.git && cd Weather-App

# Install dependencies
npm install

# Get an API key from OpenWeather:
# - Sign up or log in to your account at OpenWeather: https://home.openweathermap.org/users/sign_up
# - Navigate to the API keys section and copy your API key

# Set up environment variables:
# - Create a `.env` file in the root directory of your project
# - Add your API key to the `.env` file:
#   REACT_APP_API_KEY=your_openweather_api_key_here

# Run the application
npm start

# Open your browser and navigate to http://localhost:3000 to view the app

## Known Issues
API Limitations: The OpenWeather API has rate limits and usage restrictions. If the app displays a "401 Unauthorized" error, it could be due to an invalid or expired API key, or exceeding the API usage limits. Please check your API key and consult the OpenWeather API documentation for more information.

## Contributing
Contributions are welcome! Here's how you can contribute to this project:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Create a new Pull Request.

