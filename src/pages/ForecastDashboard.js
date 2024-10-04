import React from "react";
import useForecast from "../hooks/useForecast";
import ForecastList from "../components/ForecastList";

const ForecastDashboard = ({ currentCity }) => {
  const { forecastData, loading, error } = useForecast(currentCity);
  return (
    <div className="fle flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Weather Forecast</h1>
        {loading && <h1 className="text-3xl text-white">Loading...</h1>}
        {error && <h1 className="text-3xl text-white">{error}</h1>}
        {forecastData && !error && <ForecastList forecastData={forecastData} />}
      </div>
    </div>
  );
};

export default ForecastDashboard;
