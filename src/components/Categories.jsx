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

const Categories = () => {
  const [theme, setTheme] = useContext(DarkModeContext)
  return (
   
    <div className='justify-center md:mx-32 mt-16'>
      <div className='flex flex-col justify-center items-center mx-48'>
        <h1
        className={`
        ${theme ? "text-light-450" : "text-light-600" } font-bold font-signika text-5xl uppercase mb-4`} 
        >
        Categories
        </h1>
        <h2 className={`
        ${theme ? "text-light-100" : "text-light-600" } font-bold font-signika text-xl text-center uppercase mb-16`} 
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, aliquid accusamus molestiae ratione nisi fuga in! Repellat, consequatur itaque, voluptatem numquam doloribus repellendus error impedit, eveniet ipsum esse ea ipsam?
        </h2>

      </div>

        <div className=' md:flex flex-wrap gap-4 mt-5'>
            <img src={Soju} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Sake} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Wine} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Brandy} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer' />
            <img src={Whisky} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Gin} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Vodka} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Rum} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Tequila} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Cognac} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Beers} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
            <img src={Other} alt="" className='hover:scale-105 duration-300 hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Categories