import React from 'react'
import Soju from '../assets/Soju.svg'
import Sake from '../assets/Sake.svg'
import Wine from '../assets/Wine.svg'
import Whisky from '../assets/Whisky.svg'
import Gin from '../assets/Gin.svg'
import Vodka from '../assets/Vodka.svg'
import Rum from '../assets/Rum.svg'
import Tequila from '../assets/Tequila.svg'
import Cognac from '../assets/Cognac.svg'
import Beers from '../assets/Beers.svg'
import Other from '../assets/Others.svg'

const Categories = () => {
  return (
    <div className='mx-32 mt-16'>
        <h1 className='font-bold font-signika text-3xl'>Categories</h1>
        <div className='flex flex-wrap gap-4 mt-5'>
            <img src={Soju} alt="" className='hover:scale-105 duration-300'/>
            <img src={Sake} alt="" className='hover:scale-105 duration-300'/>
            <img src={Wine} alt="" className='hover:scale-105 duration-300'/>
            <img src={Whisky} alt="" className='hover:scale-105 duration-300'/>
            <img src={Gin} alt="" className='hover:scale-105 duration-300'/>
            <img src={Vodka} alt="" className='hover:scale-105 duration-300'/>
            <img src={Rum} alt="" className='hover:scale-105 duration-300'/>
            <img src={Tequila} alt="" className='hover:scale-105 duration-300'/>
            <img src={Cognac} alt="" className='hover:scale-105 duration-300'/>
            <img src={Beers} alt="" className='hover:scale-105 duration-300'/>
            <img src={Other} alt="" className='hover:scale-105 duration-300'/>
        </div>
    </div>
  )
}

export default Categories