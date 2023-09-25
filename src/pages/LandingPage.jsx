import React, { useContext } from 'react'
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import News from '../components/News';
import Categories from '../components/Categories';
import { DarkModeContext } from '../context/darkmode'

const LandingPage = () => {
  const [theme, setTheme] = useContext(DarkModeContext)
  return (
    <div className={`
    ${theme ? "bg-background-dark-400" : "bg-background-light-200" } `} 
    >
      <Hero/>
      <Categories/>
      <div className={`
          ${theme ? "bg-background-light-300" : "bg-background-light-400" } rounded-lg h-0.5 mx-32 my-16 `} 
      >
      </div>
      <Popular/>

      <div className={`
          ${theme ? "bg-background-light-300" : "bg-background-light-400" } rounded-lg h-0.5 mx-32 my-16 `} 
        >
      </div>
      <News/>
    </div>
  )
}

export default LandingPage