"use client";
import { useState } from "react";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";


export default function Card({ title, image, price, discount,vehicle,size }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          {discount && <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">{discount}% OFF</span>}
          <h3 className="text-lg font-bold mt-2">{title}</h3>
          <p className="text-gray-600 mt-1">EUR {price}</p>
          
          <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">İncele</button>
        </div>
      </div>
    );
  }