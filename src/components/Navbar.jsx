import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Instagram from '../assets/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faWineBottle,
  faStore,
  faUsers,
  faPhone
} from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const [nav, setNav] = useState(false)
  

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div
    className={'bg-background-400 flex flex-col justify-center z-100'} 
      >
      <div className='flex flex-row justify-between mx-4 lg:mx-60 my-2'>
          <div className='flex flex-row items-center gap-8 justify-start'>
            <div className={`
                bg-background-300 rounded-lg h-7 w-48`} 
                >   
                <p className={`
                text-center mt-0.5 font-bold`} 
                > 21+ Legal Drinking Age</p> 
            </div>
            <div className='hidden lg:inline-block'>
                <Link to='https://www.instagram.com/sundaybestid/'>
                    <img src={Instagram} alt="" className='w-6 h-6'/>
                </Link>
            </div>
          </div>

          <div className='justify-end flex flex-row items-center lg:mx-10 gap-8'>
            <div className='flex flex-row gap-3 items-center'>
              <div className='inline-block lg:hidden'>
                <Link to='https://www.instagram.com/sundaybestid/'>
                    <img src={Instagram} alt="" className='w-6 h-6'/>
                </Link>
              </div>

              <Link to='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'>
                  <FontAwesomeIcon icon={faPhone} style= {{fontSize: '1.5rem'}}/>
              </Link>
            </div>
            <div className=''>
                  <div className='flex flex-row'>
                      <p className='hidden lg:inline-block text-sm font-bold'>+62 818-688-448 - WA ONLY</p>
                  </div>
            </div>
          </div>
        </div>

        <div
         className={`
         bg-background-300 underline h-[1.5px] w-full mx-auto rounded-lg '`}  
        >
        </div>
        <div className='flex flex-row mx-4 lg:mx-60 my-2 justify-between items-center'>
          <div className='flex flex-row items-center gap-4 justify-start'>
            <Link to='/'>
              <img src={logo} className='w-14' />
            </Link>
            <p className='hidden lg:font-semibold text-2xl'>SundayBest.id</p>
          </div>
            <div className='hidden lg:flex gap-16'>
              <Link to= '/' className='font-bold  uppercase hover:text-textcolor-300' >Home</Link>
              <Link to= '/product' className='font-bold  uppercase hover:text-textcolor-300 ' >Product</Link>
              <Link to= '/store' className='font-bold uppercase hover:text-textcolor-300'>Store</Link>
              <Link to= '/partnership' className='font-bold uppercase hover:text-textcolor-300' >Partnership</Link>
            </div>
            <div className='mx-0 pr-4 lg:mx-10 lg:pr-0 gap-6 flex flex-row'>
              <label className={`btn-circle swap lg:hidden ${nav ? 'swap-rotate' : ''}  bg-background-400`}>
                  <input type="checkbox" checked={nav} onChange={handleNav} />
                  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
              </label>
            </div>
        </div>


        
        {/* mobile menu */}
        <div className={nav ? `
          bg-background-400 fixed left-0 top-0 w-[50%] h-full ease-in-out duration-500 flex flex-col z-[2]` : 'fixed left-[-100%]' }>
        <div className='flex flex-col items-center gap-16 mt-7'>
              <img src={logo} alt="" className='w-14'/>
              <Link to='/' className='font-semibold uppercase hover:text-textcolor-300 flex items-center gap-2'>
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
              <Link to='/product' className='font-semibold uppercase hover:text-textcolor-300 flex items-center gap-2'>
                <FontAwesomeIcon icon={faWineBottle} />
                Product
              </Link>
              <Link to='/store' className='font-semibold uppercase hover:text-textcolor-300 flex items-center gap-2'>
                <FontAwesomeIcon icon={faStore} />
                Store
              </Link>
              <Link to='/partnership' className='font-semibold uppercase hover:text-textcolor-300 flex items-center gap-2'>
                <FontAwesomeIcon icon={faUsers} />
                Partnership
              </Link>
        </div>
      </div>
    </div>
  );
}

