import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const signInHandler = (e) => {
    e.preventDefault();
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header></Header>

      <div className=" absolute ">
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80"></div>
        <img
          className="object-cover w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form className="mt-[170px] absolute bg-[#000000BF] w-[90%] sm:w-[70%] xl:w-[30%] md:w-[50%] rounded-lg p-8 sm:mt-20 mx-auto right-0 left-0 flex flex-col flex-wrap justify-center items-center text-white">
        <div className="text-left w-[75%] text-3xl mb-3">
          {signIn ? "Sign In" : "Sign Up"}
        </div>
        <input
          className="m-4 p-3 w-[75%] bg-[#333333] rounded-lg"
          type="email"
          placeholder="Email address"
        ></input>
        <input
          className="my-2 p-3 w-[75%] bg-[#333333] rounded-lg"
          type="password"
          placeholder="Password"
        ></input>
        {signIn ? null : (
          <input
            className="my-2 p-3 w-[75%] bg-[#333333] rounded-lg"
            type="text"
            placeholder="Name"
          ></input>
        )}
        <button className="p-3 w-[75%] text-white bg-[#E50914] m-7 hover:bg-red-700 rounded-lg">
          {signIn ? "Log In" : "Sign Up"}
        </button>
        <div className="mt-10">
        {signIn ? "New to Netflix? " : "Already User? "}
        <button onClick={signInHandler} className="cursor-pointer mb-24 underline">
          {signIn ? "Sign Up Now" : "Sign In"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
