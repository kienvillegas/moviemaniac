import React from "react";
import "./Navbar.css";
// import "../DarkMode/DarkMode.jsx";
import fireIcon from "../../assets/fire.png";
import glowingStarIcon from "../../assets/glowing-star.png";
import partyingFaceIcon from "../../assets/partying-face.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <a href="#popular">
          Popular <img className="navbar_emoji" src={fireIcon} alt="" />
        </a>
        <a href="#top_rated">
          Top Rated{" "}
          <img className="navbar_emoji" src={glowingStarIcon} alt="" />
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img className="navbar_emoji" src={partyingFaceIcon} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
