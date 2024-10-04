import React, { useState } from "react";
import { getUserLocation } from "../utils/GetUserLocation";

const Header = ({ onSearch, setCurrentCity }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setCurrentCity(searchTerm);
    }
    setSearchTerm("");
  };

  const handleGetLocation = async () => {
    try {
      const city = await getUserLocation();
      setCurrentCity(city);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex ">
      <div className="flex justify-around items-center w-full">
        <div className="flex p-3 bg-transparent shadow-xl rounded-xl backdrop-blur-lg w-[70%]">
          <div className="flex flex-row justify-start w-full ml-10">
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-white/10 rounded-md focus:outline-none placeholder:text-white/60 w-[90%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-slate-500 text-white rounded-md relative"
            >
              Search
            </button>
          </div>
          <div className="flex flex-row justify-end w-full mr-10">
            <button
              className="p-2 bg-cyan-500 text-white rounded-md relative"
              onClick={handleGetLocation}
            >
              Get My Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
