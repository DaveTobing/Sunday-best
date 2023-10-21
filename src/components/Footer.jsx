import React, { useState } from 'react'
import Logo from '../assets/Logo2.svg'
import Courier from '../assets/courier.svg'
import Order from '../assets/order.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import background from '../assets/Background.png'


export default function Footer() {
  return (
    <div className='bg-background-400'>
          <div 
          className='lg:h-screen  opacity-80'
          style={{
            backgroundImage: `url(${background})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '300px',
          }}
          >
              <div className='flex mx-16 lg:mx-60 items-center'>
                <div className='flex flex-col mt-10 lg:mt-60  lg:gap-6'>
                    <div className='mb-3'>
                      <h1 className='text-3xl lg:text-7xl font-bold text-textcolor-300'>
                        Contact Us
                      </h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-row'>
                        <h1 className='text-md lg:text-3xl font-medium text-textcolor-750 '>
                          @sundaybestid
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <h1 className='text-md lg:text-3xl font-medium text-textcolor-750 '>
                          @sundaybeststoreid@gmail.com
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <h1 className='text-md lg:text-3xl font-medium text-textcolor-750 '>
                          +62 818-688-448 <br /> (for whatsapp chat only)
                        </h1>
                      </div>
                    </div>
                </div>
              </div>
          </div>
    </div>
  )
}