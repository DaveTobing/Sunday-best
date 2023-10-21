import React from 'react'
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Article from './Article';
import Categories from '../components/Categories';

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Popular/>
      <Article/>
    </div>
  )
}

export default LandingPage