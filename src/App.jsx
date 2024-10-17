import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import fireIcon from "./assets/fire.png";
import glowingStarIcon from "./assets/glowing-star.png";
import partyingFaceIcon from "./assets/partying-face.png";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/MovieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList type="popular" title="Popular" emoji={fireIcon} />
            }
          />
          <Route
            path="/top_rated"
            element={
              <MovieList
                type="top_rated"
                title=" Top Rated"
                emoji={glowingStarIcon}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList
                type="upcoming"
                title="Upcoming"
                emoji={partyingFaceIcon}
              />
            }
          />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
