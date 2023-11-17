import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      {/* <div className="bg-black w-screen h-20"></div> */}
      <div>
      <MainContainer />
          <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
