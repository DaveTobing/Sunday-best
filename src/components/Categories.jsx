import React from 'react'
import Soju from '../assets/Soju.png'
import Sake from '../assets/Sake.png'
import Wine from '../assets/Wine.png'
import Whisky from '../assets/Whisky.png'
import Gin from '../assets/Gin.png'
import Vodka from '../assets/Vodka.png'
import Rum from '../assets/Rum.png'
import Tequila from '../assets/Tequila.png'
import Cognac from '../assets/Cognac.png'
import Beers from '../assets/Beers.png'
import Other from '../assets/Others.png'
import Brandy from '../assets/Brandy.png'
import waves from '../assets/wave-haikei.svg'
import { Link } from 'react-router-dom'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const Categories = () => {
  return (
    <div>
      <div className='bg-background-400'>
        <div className='flex flex-col justify-center items-center lg:mx-48'>
          <h1
          className={`text-[#5D4638] font-extrabold text-2xl lg:text-5xl uppercase mb-4 mt-24`} 
          >
          Categories
          </h1>
          <h2 className={`text-[#5D4638] font-bold italic text-lg lg:text-xl text-center mb-16`} 
          >
            Shop Our Wide-range of Beverages Now!
          </h2>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          <Link to= '/product?id=SOJU' onClick={handleClick}>
              <img src={Soju} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=SAKE' onClick={handleClick}>
              <img src={Sake} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=WINE' onClick={handleClick}>
            <img src={Wine} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=BRANDY' onClick={handleClick}>
            <img src={Brandy} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer' />
          </Link>

          <Link to= '/product?id=WHISKY' onClick={handleClick}>
            <img src={Whisky} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=GIN' onClick={handleClick}>
            <img src={Gin} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=VODKA' onClick={handleClick}>
            <img src={Vodka} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=RUM' onClick={handleClick}>
            <img src={Rum} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=TEQUILA' onClick={handleClick}>
            <img src={Tequila} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=COGNAC' onClick={handleClick}>
            <img src={Cognac} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=BEERS' onClick={handleClick}>
            <img src={Beers} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to= '/product?id=SOJU' onClick={handleClick}>
            <img src={Other} alt="" className='w-32 lg:w-fit hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>
        </div>
    </div>
    <div className='h-2 lg:h-10'>
      <img src={waves} alt="" className=''/>
    </div>
       
    </div>
  )
}

export default Categories