import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/ToggleBackgroundColor.css";

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    // Check if the click happened inside the container, but outside the input
    if (e.target.className === "container" && showInput) {
      setShowInput(false);  // Hide the input
      setBgColor("#fff");    // Reset background color to white
    }
  };

  const handleSearchIconClick = (e) => {
    setShowInput(true);  // Show the input when search icon is clicked
    setBgColor("#1a1a1a");  // Change background color to dark
    e.stopPropagation(); // Prevent the click from triggering handleClick
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch className="icon" onClick={handleSearchIconClick} />
      )}
    </section>
  );
}

export default HiddenSearchBar;
