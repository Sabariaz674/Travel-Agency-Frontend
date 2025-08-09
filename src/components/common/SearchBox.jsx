import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState("1 Adult, Economy");
  const [tripType, setTripType] = useState("one-way");
  const [multiTrips, setMultiTrips] = useState([{ from: "", to: "", depart: "" }]);

  const handleSearch = () => {
    alert("Searching flights...");
  };

  // Handle trip type change (One Way, Round Trip, Multi-City)
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  // Handle multi-city trips input changes
  const handleMultiTripChange = (index, field, value) => {
    const newTrips = [...multiTrips];
    newTrips[index][field] = value;
    setMultiTrips(newTrips);
  };

  // Add new trip input for multi-city
  const addNewTrip = () => {
    setMultiTrips([...multiTrips, { from: "", to: "", depart: "" }]);
  };


const handleSearchh = () => {
  navigate('/buyticket')
}

  return (
    <div className="flex justify-center mt-10 px-4 sm:px-8">
      <div className="flex flex-wrap shadow-lg w-full max-w-6xl bg-white p-6 rounded-lg ">
        {/* Trip Type Selection (Radio Buttons) */}
        <div className="w-full mb-4">
          <div className="flex justify-between">
            <label className="flex items-center space-x-1 text-[#1e3a8a]">
              <input
                type="radio"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={handleTripTypeChange}
                className="h-4 w-4"
              />
              <span className="ml-2 text-sm">One Way</span>
            </label>
            <label className="flex items-center space-x-1 text-[#1e3a8a]">
              <input
                type="radio"
                value="round-trip"
                checked={tripType === "round-trip"}
                onChange={handleTripTypeChange}
                className="h-4 w-4"
              />
              <span className="ml-2 text-sm">Round Trip</span>
            </label>
            <label className="flex items-center space-x-1 text-[#1e3a8a]">
              <input
                type="radio"
                value="multi-city"
                checked={tripType === "multi-city"}
                onChange={handleTripTypeChange}
                className="h-4 w-4"
              />
              <span className="ml-2 text-sm">Multi-City</span>
            </label>
          </div>
        </div>

        {/* From */}
        <div className="px-4 py-3 bg-white  rounded-tl-2xl w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Country, city or airport"
            className="text-sm outline-none placeholder-gray-400 w-full p-2 border border-[#1e3a8a] rounded-md"
          />
        </div>

        {/* To */}
        <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Country, city or airport"
            className="text-sm outline-none placeholder-gray-400 w-full p-2 border border-[#1e3a8a] rounded-md"
          />
        </div>

        {/* Depart Date */}
        <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">Depart</label>
          <input
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="text-sm outline-none w-full p-2 border border-[#1e3a8a] rounded-md"
          />
        </div>

        {/* Return Date - Only for Round Trip */}
        {tripType === "round-trip" && (
          <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="text-sm outline-none w-full p-2 border border-[#1e3a8a] rounded-md"
            />
          </div>
        )}

        {/* Multi-City Trip Inputs */}
        {tripType === "multi-city" && (
  <div className="w-full mb-4">
    {multiTrips.map((trip, index) => (
      <div key={index} className="flex flex-wrap space-x-4 mb-4 w-full">
        {/* From Field */}
       <div className="px-4 py-3 bg-white  rounded-tl-2xl w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Country, city or airport"
            className="text-sm outline-none placeholder-gray-400 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* To Field */}
       <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Country, city or airport"
            className="text-sm outline-none placeholder-gray-400 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Depart Field */}
       <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">Depart</label>
          <input
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="text-sm outline-none w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    ))}
    <button
      type="button"
      className="text-sm text-[#1e3a8a] hover:text-[#1e3a8a] mt-4"
      onClick={addNewTrip}
    >
      + Add Trip
    </button>
  </div>
)}

        {/* Travellers */}
        <div className="px-4 py-3 bg-white  w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
          <label className="text-sm font-semibold text-gray-600 mb-1 block">Travellers and cabin class</label>
          <input
            type="text"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            placeholder="1 Adult, Economy"
            className="text-sm outline-none w-full p-2 border border-[#1e3a8a] rounded-md"
          />
        </div>

        {/* Search Button */}
        <div
          className="bg-[#1e3a8a] hover:bg-[#1e3a8a] text-white px-6 py-3 flex items-center justify-center rounded-tr-2xl sm:rounded-tr-none sm:rounded-r-2xl cursor-pointer transition w-full sm:w-auto mt-4"
          onClick={handleSearchh}
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
