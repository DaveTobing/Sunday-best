import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Phone from '../assets/phone.svg'
import Instagram from '../assets/instagram.svg'
import Search from '../assets/Search.svg'



function Navbar() {
  return (
    <div className="flex bg-background-light-300 h-4/5 flex-col justify-center">
      <div className='flex m-12 justify-around'>
          <div className='bg-background-light-400 rounded-lg h-7 w-48'>
              <p className='text-light-300 text-center font-semibold'>21+ Legal Drinking Age</p>
          </div>
          <Link to= '/' className='font-semibold hover:underline border-red-500' >Home</Link>
          <Link to= '/' className='font-semibold hover:underline ' >Product</Link>
          <img src={logo} className='' />
          <Link to= '/' className='font-semibold hover:underline' >Store</Link>
          <Link to= '/' className='font-semibold hover:underline' >Partnership</Link>
          <div className='flex flex-row'>
              <div>
                <img src={Instagram} alt="" className='w-9 h-9'/>
              </div>
              <div>
                <img src={Phone} alt="" className='w-9 h-9'/>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold'>0812 3456 7890</p>
                <p className='text-sm font-semibold'>WA Only</p>
              </div>
          </div>
      </div>

      <div className='flex flex-row gap-64'>
        <div className='underline bg-background-light-400 h-1 w-1/2 mx-auto rounded-lg'></div>
        <div className='underline bg-background-light-400 h-1 w-1/2 mx-auto rounded-lg'></div>
      </div>

      <div className='flex justify-center'>
          <p className='text-4xl font-regular'>SundayBest.id</p>
      </div>


  
    </div>

  )
}

export default Navbar