import React from 'react'
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import New from '../components/New';
import Categories from '../components/Categories';

const LandingPage = () => {
  return (
    <div className='bg-background-light-200'>
      <Hero/>
      <Categories/>
      <Popular/>
      <div className='bg-background-light-400 rounded-lg h-0.5 mx-32'>
      </div>
      <New/>
      {/* <div className='bg-background-light-400 rounded-lg h-0.5 mx-32'>
      </div> */}
      {/* <Testimoni/> */}
    </div>
  )
}

export default LandingPage