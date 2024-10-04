import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ForecastDashboard from "./pages/ForecastDashboard";
import Header from "./components/Header";
import { useState } from "react";
import { ButtonGroup } from "./components/ButtonGroup";

function App() {
  const [currentCity, setCurrentCity] = useState("Waterloo");
  return (
    <div className="mt-10">
      <Header setCurrentCity={setCurrentCity} />
      <div className="flex justify-center items-center mt-10">
        <ButtonGroup />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard currentCity={currentCity} />} />
        <Route
          path="/forecast"
          element={<ForecastDashboard currentCity={currentCity} />}
        />
      </Routes>
    </div>
  );
}

export default App;
