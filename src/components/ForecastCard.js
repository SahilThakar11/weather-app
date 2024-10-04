const ForecastCard = ({ forecast }) => {
  if (!forecast || !forecast.weather || !forecast.main || !forecast.wind) {
    return null;
  }

  const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "short",
      day: "numeric",
    }
  );
  const forecastTime = new Date(forecast.dt * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div className="bg-white/10 w-80 flex flex-col p-5 gap-5 rounded-lg backdrop-blur-lg ml-5 mt-5">
      <h1 className="text-xl font-semibold">
        {forecastDate} - {forecastTime}
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg">Temp: {forecast.main.temp}°C</h2>
          <h2 className="text-lg">Min Temp: {forecast.main.temp_min}°C</h2>
          <h2 className="text-lg">Max Temp: {forecast.main.temp_max}°C</h2>
        </div>
        {forecast.weather[0]?.icon && (
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt="weather icon"
            className="w-24"
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg">
            Weather: {forecast.weather[0]?.description || "N/A"}
          </h2>
          <h2 className="text-lg">Wind: {forecast.wind.speed} m/s</h2>
        </div>
        <div className="ml-10">
          <h2 className="text-lg">Humidity: {forecast.main.humidity}%</h2>
          <h2 className="text-lg">Pressure: {forecast.main.pressure} hPa</h2>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
