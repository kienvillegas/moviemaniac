import React from "react";
import "./App.css";

import fireIcon from "./assets/fire.png";
import glowingStarIcon from "./assets/glowing-star.png";
import partyingFaceIcon from "./assets/partying-face.png";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={fireIcon} />
      <MovieList type="top_rated" title=" Top Rated" emoji={glowingStarIcon} />
      <MovieList type="upcoming" title="Upcoming" emoji={partyingFaceIcon} />
    </div>
  );
};

export default App;
