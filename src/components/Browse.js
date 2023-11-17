import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <div className="bg-black w-screen h-20"></div>
      <div>Broswe</div>
    </div>
  );
};

export default Browse;
