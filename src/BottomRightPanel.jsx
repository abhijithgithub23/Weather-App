import { useEffect, useState } from "react";
import "./BottomRightPanel.css";

export default function BottomRightPanel({ info }) {
  const [timeUntil, setTimeUntil] = useState("");

  if (!info) return null;

  // ------------------- Professional tip -------------------
  const getWeatherTip = () => {
    const temp = info.temp;
    const weather = info.weather.toLowerCase();

    if (weather.includes("rain")) return "Rain expected. Carry appropriate protection.";
    if (weather.includes("snow")) return "Snowy conditions. Dress warmly.";
    if (temp >= 30) return "High temperatures. Stay hydrated.";
    if (temp >= 20) return "Moderate temperature. Pleasant weather.";
    if (temp >= 10) return "Cool conditions. Light jacket recommended.";
    return "Cold conditions. Dress appropriately.";
  };

  // ------------------- Sunrise / Sunset countdown -------------------
  const calculateTimeUntil = () => {
    const now = Math.floor(Date.now() / 1000) + (info.timezone || 0);
    let target;
    let label;

    if (now < info.sunrise) {
      target = info.sunrise;
      label = "Time until sunrise";
    } else if (now < info.sunset) {
      target = info.sunset;
      label = "Time until sunset";
    } else {
      // After sunset, show next sunrise (approx 24h later)
      target = info.sunrise + 24 * 3600;
      label = "Time until sunrise";
    }

    const diff = target - now;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);

    return `${label}: ${hours}h ${minutes}m`;
  };

  useEffect(() => {
    setTimeUntil(calculateTimeUntil());
    const interval = setInterval(() => {
      setTimeUntil(calculateTimeUntil());
    }, 60000); // update every minute
    return () => clearInterval(interval);
  }, [info]);

  return (
    <div className="bottom-panel-insights">
      <h3>Weather Insights</h3>
      <div className="insight-item">
        <span className="insight-label">Summary:</span>
        <span className="insight-value">{getWeatherTip()}</span>
      </div>
      <div className="insight-item">
        <span className="insight-label">Temperature:</span>
        <span className="insight-value">
          {info.tempMin}°C - {info.tempMax}°C
        </span>
      </div>
      <div className="insight-item">
        <span className="insight-label">Humidity:</span>
        <span className="insight-value">{info.humidity}%</span>
      </div>
      <div className="insight-item">
        <span className="insight-label">Sunrise / Sunset:</span>
        <span className="insight-value">{timeUntil}</span>
      </div>
      {info.uvi !== undefined && (
        <div className="insight-item">
          <span className="insight-label">UV Index:</span>
          <span className="insight-value">{info.uvi}</span>
        </div>
      )}
      {info.aqi !== undefined && (
        <div className="insight-item">
          <span className="insight-label">Air Quality Index:</span>
          <span className="insight-value">{info.aqi}</span>
        </div>
      )}
    </div>
  );
}
