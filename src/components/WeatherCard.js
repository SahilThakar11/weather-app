const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white/10 w-max flex flex-col p-10 gap-10 rounded-lg backdrop-blur-lg ml-10 mt-10">
      <div className="flex flex-row">
        <div>
          <h1 className="text-3xl font-bold">
            {weather.name}, {weather.sys.country}
          </h1>
          <h1 className="text-lg">Weather: {weather.weather[0].description}</h1>
          <h1 className="text-lg">Temperature: {weather.main.temp}°C</h1>
          <h1 className="text-lg">Feels like: {weather.main.feels_like}°C</h1>
          <h1 className="text-lg">Humidity: {weather.main.humidity}%</h1>
        </div>
        <div className="ml-10">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
            className="w-36"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <h1 className="text-lg">Min Temp: {weather.main.temp_min}°C</h1>
          <h1 className="text-lg">Max Temp: {weather.main.temp_max}°C</h1>
        </div>
        <div>
          <h1 className="text-lg">Wind Speed: {weather.wind.speed} m/s</h1>
          <h1 className="text-lg">Wind Direction: {weather.wind.deg}°</h1>
        </div>

        <div>
          <h1 className="text-lg">
            Visibility: {weather.visibility / 1000} km
          </h1>
          <h1 className="text-lg">Pressure: {weather.main.pressure} hPa</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
