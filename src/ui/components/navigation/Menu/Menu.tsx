"use client";
import React, { useState } from "react";

export default function Menu() {
  const [isPlus, setIsPlus] = useState(true);
  const toggleSymbol = () => {
    setIsPlus(!isPlus);
  };

  return (
    <div className="text-[100px] text-[#1a1818]" onClick={toggleSymbol}>
      {isPlus ? "+" : "-"}
    </div>
  );
}
