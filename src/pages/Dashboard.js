import React from "react";
import WeatherCard from "../components/WeatherCard";
import useWeather from "../hooks/useWeather";

const Dashboard = ({ currentCity }) => {
  const { weatherData, loading, error } = useWeather(currentCity);

  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Weather Dashboard</h1>
        {loading && <h1 className="text-3xl text-white">Loading...</h1>}
        {error && <h1 className="text-3xl text-white">{error}</h1>}
        {weatherData && !error && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};

export default Dashboard;
