import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Instagram from '../assets/instagram.svg'
import Search from '../assets/Search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faLocationDot, faPhone, faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../context/darkmode'
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  const [theme, setTheme] = useContext(DarkModeContext)
  const [nav, setNav] = useState(false)

  const[showPartner, setshowPartner] = useState(false)
  const[showStore, setShowStore] = useState(false)
  
  const handleDarkMode = () => {
    if (theme === true){
      setTheme(false)
    }
    else{
      setTheme(true)
    }
  };

  const openStore = () => {
    setShowStore(true)
  };

  const closeStore = () => {
    setShowStore(false)
  };

  const openPartner = () => {
    setshowPartner(true);
  };

  const closePartner = () => {
    setshowPartner(false);
  };

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div
    className={`
          ${theme ? "bg-background-light-400" : "bg-background-light-300"} flex flex-col justify-center`} 
      >
        <div className='flex flex-row justify-between mx-4 md:mx-60 my-2'>
          <div className='flex flex-row items-center gap-8 justify-start'>
            <div className={`
                ${theme ? "bg-background-light-300" : "bg-background-light-400"} rounded-lg h-7 w-48`} 
                >   
                <p className={`
                ${theme ? "text-light-500" : "text-light-300"} text-center mt-0.5 font-semibold font-signika`} 
                > 21+ Legal Drinking Age</p> 
            </div>
            <div className='hidden md:inline-block'>
                <Link to='https://www.instagram.com/sundaybestid/'>
                    <img src={Instagram} alt="" className='w-6 h-6'/>
                </Link>
            </div>

          </div>

          <div className='justify-end flex flex-row items-center md:mx-10 gap-8'>
            <div className='flex flex-row gap-3 items-center'>
              <div className='inline-block md:hidden'>
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
                      <p className='hidden md:inline-block text-sm font-semibold font-signika'>+62 818-688-448 - WA ONLY</p>
                  </div>
            </div>
          </div>
        </div>

        <div
         className={`
         ${theme ? "bg-background-light-300" : "bg-background-light-400"} underline h-[1.5px] w-full mx-auto rounded-lg '`}  
        >
        </div>
        <div className='flex flex-row mx-4 md:mx-60 my-2 justify-between items-center'>
          <div className='flex flex-row items-center gap-4 justify-start'>
            <img src={logo} className='w-14' />
            <p className='hidden md:font-semibold font-signika text-2xl'>SundayBest.id</p>
          </div>
            <div className='hidden md:flex gap-16'>
              <Link to= '/' className='font-semibold font-signika uppercase hover:underline' >Home</Link>
              <Link to= '/product' className='font-semibold font-signika uppercase hover:underline ' >Product</Link>
              <Link to= '/' onClick={openStore} className='font-semibold uppercase font-signika hover:underline'>Store</Link>
              <Link to= '/' onClick= {openPartner}className='font-semibold uppercase font-signika hover:underline' >Partnership</Link>
            </div>
            <div className='mx-0 pr-4 md:mx-10 md:pr-0 gap-8 flex flex-row'>
              <img src={Search} alt="" />
              {theme ? 
                <FontAwesomeIcon icon={faMoon} style={{fontSize: '3rem', color:'#000'}} onClick={handleDarkMode} className='hover: cursor-pointer'/>:
                <FontAwesomeIcon icon={faSun} style={{fontSize: '2rem', color:'#000'}} onClick={handleDarkMode} className='hover: cursor-pointer'/> 
              }
              <div onClick={handleNav} className=' md:hidden w-full flex items-center justify-end'>
                {nav ?  <FontAwesomeIcon icon={faXmark} style={{ fontSize: '2rem', color: '#000' }} /> :  <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem', color: '#000' }} /> }
              </div>
            </div>
        </div>

        
        {/* mobile menu */}

        <div className={nav ?         `
          ${theme ? "bg-background-light-400" : "bg-background-light-300"} fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 flex flex-col z-[2]` : 'fixed left-[-100%]' }>
        <div className='flex flex-col items-center gap-16 mt-7'>
              <img src={logo} alt="" className='w-14'/>
              <Link to= '/' className='font-semibold font-signika uppercase hover:underline' >Home</Link>
              <Link to= '/product' className='font-semibold font-signika uppercase hover:underline ' >Product</Link>
              <Link to= '/' onClick={openStore} className='font-semibold uppercase font-signika hover:underline'>Store</Link>
              <Link to= '/' onClick= {openPartner}className='font-semibold uppercase font-signika hover:underline' >Partnership</Link>
            </div>
        </div>

      {/* Store Modal */}
      {showStore && (
          <div className="fixed inset-0 flex items-center justify-center z-[40]" 
          style={{ 
              backgroundColor: 'rgba(128, 128, 128, 0.7)', 
              backdropFilter: 'blur(5px)'
          }}>     
            <div className="absolute p-4 w-[800px] h-[500px] rounded-lg" 
            style={{ 
                backgroundImage: "url('/bgl.png')",
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                backdropFilter: 'none',
            }}>
              <div className='flex justify-between'>
                <div className='pl-5'>
                
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[#F1EA3E] font-bold text-2xl'>Store</h1>
                  <h1 className='text-[#F1EA3E] font-bold text-2xl pl-2'>Location</h1>
                </div>
                <div className='justify-end'>
                <FontAwesomeIcon icon={faXmark} onClick={closeStore} 
                style={{ 
                    fontSize: '1.5rem', 
                    color: '#FFFFFF', 
                    cursor: 'pointer' 
                }} />
                </div>
              </div>
              <div className='grid grid-cols-2 mt-3'>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" width="350" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
                <div className='flex flex-col'>
                  
                    <div className='flex justify-center'>
                      <img src={logo} alt="" />
                    </div>
                    <p className='font=semibold text-light-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae placeat illum numquam perferendis, architecto at facere earum! e, consequuntur illum ipsum provident.</p>
                    <div className='flex flex-row gap-4 items-center pt-[80px]'>
                      <FontAwesomeIcon icon={faLocationDot} style= {{color:'#F1EA3E', fontSize: '1.5rem'}} />
                      <h1 className='text-[#F1EA3E] font-bold text-xl'>Sunday Best Jakarta Selatan</h1>
                    </div>
                    <p className='text-[#FFFFFF]'>
                    Grand ITC Permata Hijau
                    Jl. Arteri Permata Hijau No.2, Grogol Utara, Kec. Kby. Lama,
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210
                    </p>
                  
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Partner Modal */}
      {showPartner && (
          <div className="fixed inset-0 flex items-center justify-center z-[40]" 
          style={{ 
              backgroundColor: 'rgba(128, 128, 128, 0.7)', 
              backdropFilter: 'blur(5px)'
          }}>     
            <div className="absolute p-4 w-[800px] h-[500px] rounded-lg" 
            style={{ 
                backgroundImage: "url('/bgl.png')",
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                backdropFilter: 'none',
            }}>
              <div className='flex justify-between'>
                <div className='pl-5'>
                
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[#F1EA3E] font-bold text-2xl pl-2'>Partnership</h1>
                </div>
                <div className='justify-end'>
                <FontAwesomeIcon icon={faXmark} onClick={closePartner} 
                style={{ 
                    fontSize: '1.5rem', 
                    color: '#FFFFFF', 
                    cursor: 'pointer' 
                }} />
                </div>
              </div>
              <div className='grid grid-cols-2 mt-12'>
                  <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" width="350" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                <div className='flex flex-col'>
                  
                    <div className='flex justify-center'>
                      <img src={logo} alt="" />
                    </div>
                    <p className='font=semibold text-light-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae placeat illum numquam perferendis, architecto at facere earum! e, consequuntur illum ipsum provident.</p>
                    <div className='flex flex-row gap-4 items-center pt-[80px]'>
                      <FontAwesomeIcon icon={faLocationDot} style= {{color:'#F1EA3E', fontSize: '1.5rem'}} />
                      <h1 className='text-[#F1EA3E] font-bold text-xl'>Sunday Best Jakarta Selatan</h1>
                    </div>
                    <p className='text-[#FFFFFF]'>
                    Grand ITC Permata Hijau
                    Jl. Arteri Permata Hijau No.2, Grogol Utara, Kec. Kby. Lama,
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210
                    </p>
                  
                </div>
              </div>
            </div>
          </div>
        )}
  
    </div>

  )
}

