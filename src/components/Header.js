import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        navigate("/login");
      }
    });

    //unsubscribe while component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };


  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const location = useLocation();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuButtonClass = 'm-1 sm:m-3 border p-1 px-3 rounded-md bg-red-600 text-white font-semibold';

  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-30">
      <div className="w-[80%]  mx-auto flex justify-between items-center flex-wrap">
        <div className="w-36 sm:w-44">
          <Link to="/">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            ></img>
          </Link>
        </div>
      

        <div className="m-2 flex justify-between items-center flex-wrap sm:m-3">

{/* Hamburger Menu Button */}
<button
  onClick={handleToggleMenu}
  className={`sm:hidden ${menuButtonClass}`}
>
 {isMenuOpen?"🗙":"Menu"}
</button>

{/* Navigation Items */}
<div className={`sm:flex items-center ${isMenuOpen ? 'flex' : 'hidden'} flex-wrap`}>
  {showGptSearch && (
    <select
      className="m-1 sm:m-3 border p-1 px-3 rounded-md bg-gray-900 text-white"
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>
  )}

  {location.pathname === "/" || location.pathname === "/login" ? (
            <div></div>
          ) : (
            <button onClick={handleGptSearchClick} className="m-1 sm:m-3 border p-1 px-3 rounded-md bg-red-600 text-white font-semibold">
             {showGptSearch ? "Homepage":"GPT search"}
            </button>
          )}
          <div className="m-1 sm:m-3 border p-1 rounded-md bg-gray-900 text-white">
            {location.pathname === "/" || location.pathname === "/login"
              ? "Language"
              : `👦 - ${user?.userData?.displayName}`}
          </div>


  {/* ... Other navigation items ... */}

  {/* Sign In/Sign Out Button */}
  {location.pathname === "/" || location.pathname === "/login" ? (
    <Link to="/login">
      <button className={`sm:${menuButtonClass}`}>
        Sign In
      </button>
    </Link>
  ) : (
    <Link to="/">
      <button
        onClick={signOutHandler}
        className={`sm:${menuButtonClass}`}
      >
        Sign Out
      </button>
    </Link>
  )}
</div>
</div>


      </div>
    </div>
  );



  };

export default Header;


