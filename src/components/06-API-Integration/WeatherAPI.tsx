 import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  time: string;
}

// Weather code mapping to descriptions and icons
const weatherCodeMap: Record<number, { description: string; icon: string }> = {
  0: { description: 'Clear sky', icon: '☀️' },
  1: { description: 'Mainly clear', icon: '🌤️' },
  2: { description: 'Partly cloudy', icon: '⛅' },
  3: { description: 'Overcast', icon: '☁️' },
  45: { description: 'Fog', icon: '🌫️' },
  48: { description: 'Depositing rime fog', icon: '🌫️' },
  51: { description: 'Light drizzle', icon: '🌦️' },
  53: { description: 'Moderate drizzle', icon: '🌦️' },
  55: { description: 'Dense drizzle', icon: '🌧️' },
  61: { description: 'Slight rain', icon: '🌦️' },
  63: { description: 'Moderate rain', icon: '🌧️' },
  65: { description: 'Heavy rain', icon: '🌧️' },
  71: { description: 'Slight snow fall', icon: '🌨️' },
  73: { description: 'Moderate snow fall', icon: '🌨️' },
  75: { description: 'Heavy snow fall', icon: '❄️' },
  95: { description: 'Thunderstorm', icon: '⛈️' },
  96: { description: 'Thunderstorm with slight hail', icon: '⛈️' },
  99: { description: 'Thunderstorm with heavy hail', icon: '⛈️' },
};

// Default cities with their coordinates
const cities = [
  { name: 'London', lat: 51.51, lon: -0.13 },
  { name: 'New York', lat: 40.71, lon: -74.01 },
  { name: 'Tokyo', lat: 35.69, lon: 139.69 },
  { name: 'Paris', lat: 48.85, lon: 2.35 },
  { name: 'Sydney', lat: -33.87, lon: 151.21 }
];

const WeatherAPI = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (lat: number, lon: number, cityName: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      
      const data = await response.json();
      
      if (data.current) {
        setWeather({
          location: cityName,
          temperature: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
          windSpeed: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m,
          time: data.current.time
        });
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(selectedCity.lat, selectedCity.lon, selectedCity.name);
  }, [selectedCity]);

  const getWeatherInfo = (code: number) => {
    return weatherCodeMap[code] || { description: 'Unknown', icon: '❓' };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Weather API</h3>
      
      <div className="mb-4">
        <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-1">
          Select a city:
        </label>
        <select
          id="city-select"
          value={selectedCity.name}
          onChange={(e) => {
            const city = cities.find(c => c.name === e.target.value);
            if (city) setSelectedCity(city);
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {cities.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading weather data...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded">
          <p>{error}</p>
        </div>
      )}
      
      {weather && !loading && !error && (
        <div className="bg-blue-50 p-4 rounded">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">{weather.location}</h4>
            <span className="text-4xl">{getWeatherInfo(weather.weatherCode).icon}</span>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold">{weather.temperature}°C</p>
            <p className="text-gray-700">{getWeatherInfo(weather.weatherCode).description}</p>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Humidity:</span> {weather.humidity}%
            </div>
            <div>
              <span className="text-gray-500">Wind:</span> {weather.windSpeed} km/h
            </div>
          </div>
          
          <div className="mt-2 text-xs text-gray-500">
            Last updated: {new Date(weather.time).toLocaleString()}
          </div>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Data provided by <a href="https://open-meteo.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Open-Meteo Weather API</a></p>
      </div>
    </div>
  );
};

export default WeatherAPI;