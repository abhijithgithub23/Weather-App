import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "73063defe61b178258c8867a3f87cc2b";

  const getWeatherInfo = async (q) => {
    const res = await fetch(`${API_URL}?q=${encodeURIComponent(q)}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error("Location not found or API error");
    const json = await res.json();
    return {
      city: json.name || q,
      country: json.sys?.country || "",
      coord: json.coord || { lat: 0, lon: 0 },
      temp: Math.round(json.main.temp * 10) / 10,
      tempMin: Math.round(json.main.temp_min * 10) / 10,
      tempMax: Math.round(json.main.temp_max * 10) / 10,
      feelsLike: Math.round(json.main.feels_like * 10) / 10,
      humidity: json.main.humidity,
      pressure: json.main.pressure,
      visibility: json.visibility,
      wind: json.wind || {},
      weather: json.weather[0]?.main || "N/A",
      description: json.weather[0]?.description || "",
      icon: json.weather[0]?.icon || "",
      sunrise: json.sys?.sunrise,
      sunset: json.sys?.sunset,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setError("");
    setLoading(true);
    try {
      const data = await getWeatherInfo(city.trim());
      updateInfo(data);
      setCity("");
    } catch (err) {
      console.error(err);
      setError("Location not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="top-right">
    <div className="SearchBox">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="city-input"
          placeholder="Enter city (e.g., London)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-btn" type="submit" disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </form>
      {error && <div className="search-error">{error}</div>}
    </div>
    </div>
  );
}
