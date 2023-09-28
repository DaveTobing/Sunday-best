import React, { useContext } from 'react'
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
import { DarkModeContext } from '../context/darkmode'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [theme, setTheme] = useContext(DarkModeContext)
  return (
   
    <div className=''>
      <div className='flex flex-col justify-center items-center md:mx-48 my-6'>
        <h1
        className={`
        ${theme ? "text-light-450" : "text-light-600" } font-bold font-signika text-2xl md:text-5xl uppercase mb-4`} 
        >
        Categories
        </h1>
        <h2 className={`
        ${theme ? "text-light-100" : "text-light-600" } font-semibold font-signika text-lg md:text-xl text-center uppercase mb-16`} 
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, aliquid accusamus molestiae ratione nisi fuga in! Repellat, consequatur itaque, voluptatem numquam doloribus repellendus error impedit, eveniet ipsum esse ea ipsam?
        </h2>

      </div>

        <div className='flex flex-wrap justify-center gap-4 mt-5'>
          <Link to='/product'>
              <img src={Soju} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product/sake'>
              <img src={Sake} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Wine} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Brandy} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer' />
          </Link>

          <Link to='/product'>
            <img src={Whisky} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Gin} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Vodka} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>

          </Link>

          <Link to='/product/rum'>
            <img src={Rum} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Tequila} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Cognac} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Beers} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link to='/product'>
            <img src={Other} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>
            


        </div>
    </div>
  )
}

export default Categories