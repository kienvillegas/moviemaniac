import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">
          Popular <img className="navbar_emoji" src={fireIcon} alt="" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated{" "}
          <img className="navbar_emoji" src={glowingStarIcon} alt="" />
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming{" "}
          <img className="navbar_emoji" src={partyingFaceIcon} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
