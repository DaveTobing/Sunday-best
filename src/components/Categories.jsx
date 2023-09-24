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

const Categories = () => {
  return (
    <div className='mx-32 mt-16'>
        <h1 className='font-bold font-signika text-3xl text-center uppercase'>Categories</h1>
        <div className='flex flex-wrap gap-4 mt-5'>
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