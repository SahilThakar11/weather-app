import React from "react";
import ForecastCard from "./ForecastCard";

const ForecastList = ({ forecastData }) => {
  if (!forecastData || !forecastData.list || forecastData.list.length === 0) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div className="forecast-list">
      <h1 className="text-2xl font-semibold">
        Forecast for {forecastData.city.name}, {forecastData.city.country}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {forecastData.list.map((forecast, index) => (
          <ForecastCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
