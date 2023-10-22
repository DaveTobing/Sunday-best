import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Instagram from '../assets/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faWineBottle,
  faStore,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
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
    className={'bg-background-400 flex flex-col justify-center z-100'} 
      >
        <div className='flex flex-row mx-4 lg:mx-20 my-4 justify-between items-center'>
          <div className='flex flex-row items-center gap-4 justify-start'>
            <Link to='/'>
              <img src={logo} className='w-14' />
            </Link>
          </div>
            <div className='hidden lg:flex gap-32'>
              <Link to= '/' className='font-bold uppercase hover:text-textcolor-300' >Home</Link>
              <Link to= '/product' className='font-bold uppercase hover:text-textcolor-300 ' >Product</Link>
              <Link to= '/store' className='font-bold uppercase hover:text-textcolor-300'>Store</Link>
              <Link to= '/partnership' className='font-bold uppercase hover:text-textcolor-300' >Partnership</Link>
            </div>
            <div className='mx-0 pr-4 lg:mx-10 lg:hidden gap-6 flex flex-row'>
              <label className={`btn-circle swap lg:hidden ${nav ? 'swap-rotate' : ''} bg-background-400`}>
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

