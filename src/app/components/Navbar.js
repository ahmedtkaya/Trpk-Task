"use client";
import { useState } from "react";
import { FiHeart, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import FilterPopup from "./FilterPopup";

export default function Navbar({ openPopup }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <button onClick={openPopup} className="text-xl">
        <FiMenu />
      </button>
      <h1 className="text-lg font-bold">Tripkolic</h1>
      <div className="flex gap-4">
        <FiShoppingCart className="text-xl" />
        <FiUser className="text-xl" />
        <FiHeart className="text-xl" />
      </div>
    </nav>
  );
}
