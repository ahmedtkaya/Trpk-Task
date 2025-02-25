"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FilterPopup from "./components/FilterPopup";

const tours = [
  { title: "Phi Phi Islands Tour", vehicle:"Car", image: "/images/tour1.jpeg", price: 1400, category: "Tours" },
  { title: "Concert Ticket",type:"Premium", image: "/images/tour1.jpeg", price: 150, category: "Tickets" },
  { title: "Car Rental", image: "/images/tour1.jpeg", price: 300, category: "Rent" },
  { title: "Airport Transfer", image: "/images/tour1.jpeg", price: 50, category: "Transfer" },
  { title: "Mikhonos Islands Tour",vehicle:"Caravan", image: "/images/tour1.jpeg", price: 1400, category: "Tours" },
  { title: "Football Ticket",type:"Basic", image: "/images/tour1.jpeg", price: 150, category: "Tickets" },
  { title: "Yacht Rental",size:"25m", image: "/images/tour1.jpeg", price: 290, category: "Rent" },
  { title: "Yacht Rental 2",size:"42m", image: "/images/tour1.jpeg", price: 390, category: "Rent" },
  { title: "Bus Station Transfer", image: "/images/tour1.jpeg", price: 50, category: "Transfer" },
];

export default function Home() {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false); 

  const filteredTours = tours.filter(tour => {
    if (!filter.category) return true; 
    if (tour.category !== filter.category) return false; 

    
    if (filter.category === "Tours" && filter.vehicle) {
      return tour.vehicle === filter.vehicle;
    }
    if(filter.category === "Rent" && filter.size){
      return tour.size === filter.size;
    }
    if(filter.category === "Tickets" && filter.type){
      return tour.type === filter.type;
    }

    return true; 
  });

  const openPopup = () => setIsOpen(true); 
  const closePopup = () => setIsOpen(false); 

  return (
    <div>
      <Navbar openPopup={openPopup} />
      {isOpen && <FilterPopup close={closePopup} setFilter={setFilter} />} 
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((tour, index) => (
          <Card key={index} {...tour} />
        ))}
      </div>
    </div>
  );
}
