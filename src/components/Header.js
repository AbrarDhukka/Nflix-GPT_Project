import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user =useSelector((store)=> store.user);
  const signOutHandler=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.


    }).catch((error) => {
      // An error happened.
    });

  }
  const location = useLocation();

  return (
    <div className="w-full absolute bg-gradient-to from-black z-30">
      <div className="w-[80%]  mx-auto flex justify-between items-center flex-wrap bg-gradient-to from-black">
        <div className="w-36 sm:w-44">
          <Link to="/">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            ></img>
          </Link>
        </div>
        <div className="m-2 flex justify-between items-center flex-wrap sm:m-3">
          <div className="m-1 sm:m-3 border p-1 rounded-md text-white">
            {location.pathname === "/" || location.pathname === "/login" ? "Language" : `User - ${user?.displayName}`}
          </div>

          {location.pathname === "/" || location.pathname === "/login" ? (
            <Link to="/login">
              <button className="m-1 sm:m-3 border p-1 px-3 rounded-md bg-red-600 text-white font-semibold">
                Sign In
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button onClick={signOutHandler} className="m-1 sm:m-3 border p-1 px-3 rounded-md bg-red-600 text-white font-semibold">
                Sign Out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
