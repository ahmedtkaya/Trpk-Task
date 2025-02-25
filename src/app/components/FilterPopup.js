"use client";
import { useState } from "react";

export default function FilterPopup({ close, setFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(""); 
  const [selectedSize, setSelectedSize] = useState(""); 
  const [selectedType, setSelectedType] = useState(""); 

  const applyFilter = () => {
    console.log("Applying filter:", selectedCategory, selectedVehicle, selectedSize,selectedType);
    setFilter({ category: selectedCategory, vehicle: selectedVehicle, size: selectedSize,type:selectedType }); 
    close();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Filter Options</h2>

        
        <select 
          className="w-full p-2 border rounded mb-4" 
          value={selectedCategory} 
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedVehicle(""); 
            setSelectedSize("");
            setSelectedType("");
          }}
        >
          <option value="">All</option>
          <option value="Tours">Tours</option>
          <option value="Tickets">Tickets</option>
          <option value="Rent">Rent</option>
          <option value="Transfer">Transfer</option>
        </select>

        
        {selectedCategory === "Tours" && (
          <select 
            className="w-full p-2 border rounded mb-4" 
            value={selectedVehicle} 
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            <option value="">All Vehicles</option>
            <option value="Car">Car</option>
            <option value="Caravan">Caravan</option>
          </select>
        )}

        
        {selectedCategory === "Rent" && (
          <select 
            className="w-full p-2 border rounded mb-4" 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="25m">25m</option>
            <option value="42m">42m</option>
          </select>
        )}
        {selectedCategory === "Tickets" && (
          <select 
            className="w-full p-2 border rounded mb-4" 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Premium">Premium</option>
            <option value="Basic">Basic</option>
          </select>
        )}

        <div className="flex justify-between">
          <button onClick={close} className="text-red-500">Close</button>
          <button onClick={applyFilter} className="bg-blue-500 text-white px-4 py-2 rounded">Apply</button>
        </div>
      </div>
    </div>
  );
}
