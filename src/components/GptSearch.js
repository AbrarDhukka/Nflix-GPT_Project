import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-20 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80"></div>
          <img
            className="object-cover w-full h-screen"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="bg-img"
          />
        </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  )
}

export default GptSearch