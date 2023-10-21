import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Instagram from '../assets/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../context/darkmode'


export default function Navbar() {
  const [theme, setTheme] = useContext(DarkModeContext)

  const [nav, setNav] = useState(false)

  const[showPartner, setshowPartner] = useState(false)

  const[showStore, setShowStore] = useState(false)

  
  const handleDarkMode = () => {
    if (theme === false){
      setTheme(true)
    }
    else{
      setTheme(false)
    }
  };

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div
    className={'bg-background-400 flex flex-col justify-center'} 
      >
        <div className='flex flex-row mx-4 lg:mx-20 my-4 justify-between items-center'>
          <div className='flex flex-row items-center gap-4 justify-start'>
            <Link to='/'>
              <img src={logo} className='w-14' />
            </Link>
            <p className='hidden lg:font-semibold font-signika text-2xl'>SundayBest.id</p>
          </div>
            <div className='hidden lg:flex gap-32'>
              <Link to= '/' className='font-semibold font-signika uppercase hover:text-textcolor-300' >Home</Link>
              <Link to= '/product' className='font-semibold font-signika uppercase hover:text-textcolor-300 ' >Product</Link>
              <Link to= '/store' className='font-semibold uppercase font-signika hover:text-textcolor-300'>Store</Link>
              <Link to= '/partnership' className='font-semibold uppercase font-signika hover:text-textcolor-300' >Partnership</Link>
            </div>
            {/* <div className='mx-0 pr-4 lg:mx-10 lg:pr-0 gap-6 flex flex-row'>
              <label className={`swap ${theme ? 'swap-rotate' : ''}  ${theme ? "bg-background-light-300" : "bg-background-light-400"}`}>
                <input type="checkbox" checked={theme} onChange={handleDarkMode}/>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              </label>
              <label className={`btn-circle swap lg:hidden ${nav ? 'swap-rotate' : ''}  ${theme ? "bg-background-light-300" : "bg-background-light-400"}`}>
                  <input type="checkbox" checked={nav} onChange={handleNav} />
                  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
              </label>
            </div> */}
        </div>

        
        {/* mobile menu */}
        <div className={nav ?         `
          ${theme ? "bg-background-light-300" : "bg-background-light-400"} fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 flex flex-col z-[2]` : 'fixed left-[-100%]' }>
        <div className='flex flex-col items-center gap-16 mt-7'>
              <img src={logo} alt="" className='w-14'/>
              <Link to= '/' className='font-semibold font-signika uppercase hover:text-light-300' >Home</Link>
              <Link to= '/product' className='font-semibold font-signika uppercase hover:text-light-300 ' >Product</Link>
              <Link to= '/store'  className='font-semibold uppercase font-signika hover:text-light-300'>Store</Link>
              <Link to= '/partnership' className='font-semibold uppercase font-signika hover:text-light-300' >Partnership</Link>
            </div>
        </div>
    </div>

  )
}

