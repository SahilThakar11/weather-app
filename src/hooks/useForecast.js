import { useState, useEffect } from "react";

const API_KEY = "cbafd9efbbfea5b23d7266ddcf28daa0";

const useForecast = (city) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }

        const data = await response.json();
        setForecastData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { forecastData, loading, error };
};

export default useForecast;
