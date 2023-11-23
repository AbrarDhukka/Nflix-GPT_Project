import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-20 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80"></div>
          <img
            className="object-cover w-full h-screen"
            src={BG_URL}
            alt="bg-img"
          />
        </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
    
  )
}

export default GptSearch