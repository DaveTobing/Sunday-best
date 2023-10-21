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
    <div className='bg-background-400'>
      <div className='flex flex-col justify-center items-center lg:mx-48 my-6'>
        <h1
        className={`text-textcolor-600 font-bold font-signika text-2xl lg:text-5xl uppercase mb-4`} 
        >
        Categories
        </h1>
        <h2 className={`text-textcolor-600 font-semibold font-signika text-lg lg:text-xl text-center uppercase mb-16`} 
        >
          Shop our wide-range of beverages now!
        </h2>
      </div>

        <div className='flex flex-wrap justify-center gap-4 mt-5'>
          {/* <Link>
              <img src={Soju} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
              <img src={Sake} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Wine} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Brandy} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer' />
          </Link>

          <Link>
            <img src={Whisky} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Gin} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Vodka} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Rum} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Tequila} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Cognac} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link>

          <Link>
            <img src={Beers} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
          </Link> */}
        </div>
    </div>
  )
}

export default Categories