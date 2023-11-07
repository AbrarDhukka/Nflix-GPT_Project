import React from 'react';
import Header from './Header';

const Homepage = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <Header />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center flex-col w-[100%] z-20">
          <p className="text-[32px] text-center md:text-5xl font-bold relative z-20">
            Laughter. Tears. Thrills. Find it all on Netflix.
          </p>

          <p className="text-[18px] text-center md:text-2xl m-[16px] relative z-20">
            Endless entertainment starts at just ₹ 149. Cancel anytime.
          </p>
          <p className="text-[18px] text-center md:text-[20px] relative z-20">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-between items-center flex-wrap m-6">
            <input
              className="sm:px-[70px] px-[45px] my-2 mx-2 sm:py-4 py-2 rounded-md sm:text-xl text-lg bg-gray-800 opacity-70"
              type="email"
              placeholder="Email address"
            ></input>
            <button className="bg-red-700 text-white sm:px-11 px-9 sm:py-4 py-2 sm:text-xl text-lg rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80"></div>
          <img
            className="object-cover w-full h-screen"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="bg-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
