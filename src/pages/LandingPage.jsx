import React, { useContext } from 'react'
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import News from '../components/News';
import Categories from '../components/Categories';
import { DarkModeContext } from '../context/darkmode';

const LandingPage = () => {
  const [theme, setTheme] = useContext(DarkModeContext)
  return (
    <div className={`
    ${theme ? "bg-background-dark-200" : "bg-background-dark-400" } `} 
    >
      <Hero/>
      <div className="my-5">
      <svg width="100%" height="60" viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 0 5 Q 25 10 50 5 T 100 5" fill="transparent" stroke="url(#gradient)" strokeWidth="7"></path>
          <defs>
              <linearGradient id="gradient">
                  <stop offset="25%" stop-color="#FEEB09" />
                  <stop offset="100%" stop-color="#00A2EA" />
              </linearGradient>
          </defs>
      </svg>
      </div>

      <div className="mt-5 flex justify-center items-center">
      <div className="shadow-xl bg-gradient-to-br from-[#FEEB09] to-[#00A2EA] rounded-lg p-4">
          <iframe 
              src="https://cdn.htmlgames.com/BubbleBilliards/" 
              width="600" 
              height="400" 
              title="Embedded Game" 
              frameBorder="0"
              className="rounded-lg"
          ></iframe>
      </div>
      </div>

      <div className="my-5">
      <svg width="100%" height="60" viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 0 5 Q 25 10 50 5 T 100 5" fill="transparent" stroke="url(#gradient)" strokeWidth="7"></path>
          <defs>
              <linearGradient id="gradient">
                  <stop offset="25%" stop-color="#FEEB09" />
                  <stop offset="100%" stop-color="#00A2EA" />
              </linearGradient>
          </defs>
      </svg>
      </div>

      <Categories style={{ marginTop: '20px' }}/>

      <div className={`
          ${theme ? "bg-background-light-400" : "bg-background-light-300" } rounded-lg h-0.5 mx-16 lg:mx-32 my-16 `} 
      >
      </div>
      <Popular/>

      <div className={`
          ${theme ? "bg-background-light-400" : "bg-background-light-300" } rounded-lg h-0.5 mx-16 lg:mx-32 my-16 `} 
        >
      </div>
      <News/>
    </div>
  )
}

export default LandingPage