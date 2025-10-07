import "./InfoBox.css";

// Convert API icon code to OpenWeatherMap icon URL
const getIconURL = (icon) => icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : "";

const degToCardinal = (deg) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round((deg % 360) / 45) % 8];
};

const formatTime = (timestamp, timezone) => {
  if (!timestamp) return "-";
  const date = new Date((timestamp + (timezone || 0)) * 1000);
  return date.toUTCString().match(/\d\d:\d\d/)[0];
};

export default function InfoBox({ info }) {
  if (!info) return null;

  return (
    <div className="InfoBox">
      <div className="info-card">
        <div className="info-top">
          <div className="info-city">{info.city}, {info.country}</div>
          <img className="info-icon" src={getIconURL(info.icon)} alt={info.description} />
        </div>

        <div className="info-temp">
          <span className="temp-value">{info.temp ?? "—"}</span>
          <span className="temp-unit">°C</span>
        </div>

        <div className="info-desc">{info.description}</div>

        <div className="meta-grid">
          <div className="meta-item">
            <div className="meta-label">Feels</div>
            <div className="meta-value">{info.feelsLike ?? "-"}°C</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Humidity</div>
            <div className="meta-value">{info.humidity ?? "-"}%</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Pressure</div>
            <div className="meta-value">{info.pressure ?? "-"} hPa</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Visibility</div>
            <div className="meta-value">{info.visibility ?? "-"} m</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Wind</div>
            <div className="meta-value">
              {info.wind?.speed ?? "-"} m/s {info.wind?.deg ? degToCardinal(info.wind.deg) : ""}
            </div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Sunrise</div>
            <div className="meta-value">{formatTime(info.sunrise, info.timezone)}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Sunset</div>
            <div className="meta-value">{formatTime(info.sunset, info.timezone)}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Coordinates</div>
            <div className="meta-value">{info.coord?.lat ?? "-"}, {info.coord?.lon ?? "-"}</div>
          </div>
        </div>
        
      </div> 
    </div>
    
  );
}
