import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import BottomRightPanel from "./BottomRightPanel";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kasaragod",
    country: "IN",
    coord: { lat: 12.5, lon: 75 },
    temp: 22.48,
    tempMin: 22.48,
    tempMax: 22.48,
    feelsLike: 23.19,
    humidity: 92,
    pressure: 1011,
    visibility: 10000,
    wind: { speed: 2.93, deg: 12, gust: 5.82 },
    weather: "Clouds",
    description: "broken clouds",
    icon: "04n",
    sunrise: 1759798152,
    sunset: 1759841176,
  });

  const updateInfo = (result) => {
    if (!result) return;
    setWeatherInfo(result);
  };

  // Map main weather to a background gradient
  const getWeatherKey = (w = "") => {
    const s = String(w).toLowerCase();
    if (s.includes("clear")) return "clear";
    if (s.includes("rain") || s.includes("drizzle") || s.includes("thunder")) return "rain";
    if (s.includes("cloud")) return "clouds";
    if (s.includes("snow")) return "snow";
    if (s.includes("mist") || s.includes("haze") || s.includes("fog") || s.includes("smoke")) return "haze";
    return "default";
  };

  const bgMap = {
    clear: "linear-gradient(135deg,#74ABE2 0%, #5563DE 100%)",
    rain: "linear-gradient(135deg,#3A6073 0%, #16222A 100%)",
    clouds: "linear-gradient(135deg,#6D7B8D 0%, #2E3A4F 100%)",
    snow: "linear-gradient(135deg,#E0F7FA 0%, #A1C4FD 100%)",
    haze: "linear-gradient(135deg,#636363 0%, #a2ab58 100%)",
    default: "linear-gradient(135deg,#1e3c72, #2a5298)",
  };

  const key = getWeatherKey(weatherInfo.weather || weatherInfo.description);
  const bgStyle = {
    background: bgMap[key] || bgMap.default,
    transition: "background 0.6s ease-in-out",
    minHeight: "100vh",
  };

  return (
    <div className="WeatherApp" style={bgStyle}>
      <div className="app-shell">
        <header className="app-header">
          <h1 className="app-title">Weather • Now</h1>
          <p className="app-sub">Fast, clean & detailed — powered by OpenWeatherMap</p>
        </header>

        <SearchBox updateInfo={updateInfo} />

        <InfoBox info={weatherInfo} />
        
        

    <div>
      {weatherInfo && <BottomRightPanel info={weatherInfo} />}
    </div>

      </div>
    </div>
  );
}
