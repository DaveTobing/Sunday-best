import React, { useState } from 'react'
import Logo from '../assets/Logo2.svg'
import Courier from '../assets/courier.svg'
import Order from '../assets/order.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
      <div className='flex flex-row justify-start mx-60 my-14 items-center'>
          <div className='flex flex-col items-start mt-7 md:justify-center md:gap-6 lg:mt-0 hover:cursor-default'>
              <h1 className='text-lg md:text-3xl lg:text-7xl font-semibold text-textcolor-300 font-signika'>
                Contact Us
                </h1>
              <h1 className='text-lg md:text-xl lg:text-3xl font-light text-textcolor-750 font-signika'>
                @sundaybestid
              </h1>
              <h1 className='text-lg md:text-xl lg:text-3xl font-light text-textcolor-750 font-signika'>
                @sundaybeststoreid@gmail.com
              </h1>
              <h1 className='text-lg md:text-xl lg:text-3xl font-light text-textcolor-750 font-signika'>
                +62 818-688-448 <br /> (for whatsapp chat only)
              </h1>
          </div>
      </div>
  )
}