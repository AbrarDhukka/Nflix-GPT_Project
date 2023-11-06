import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute bg-gradient-to from-black z-30">
      <div className="w-[80%]  mx-auto flex justify-between items-center flex-wrap bg-gradient-to from-black">
        <div className="w-36 sm:w-44">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          ></img>
        </div>
        <div className="m-2 flex justify-between items-center flex-wrap sm:m-3">
          <div className="m-1 sm:m-3 border p-1 rounded-md text-white">Language</div>
          <div className="m-1 sm:m-3 border p-1 px-3 rounded-md bg-red-600 text-white font-semibold">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

