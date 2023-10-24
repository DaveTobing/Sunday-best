import React, { useState } from 'react'
import Logo from '../assets/Logo2.svg'
import Courier from '../assets/courier.svg'
import Order from '../assets/order.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  const[showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <footer className="px-4 divide-y bg-background-300 h-full">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ml-10">
              <img src={Logo} alt="" />
            </div>
            <span className="self-center text-2xl font-semibold">Sunday Best</span>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-bold uppercase">Categories</h3>
            <ul className="space-y-1 grid grid-cols-3 items-center">
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Soju</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline '>Sake</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline'>Wine</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Brandy</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Whisky</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Gin</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Vodka</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Rum</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Tequila</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Cognac</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Beers</Link>
              </li>
              <li>
                <Link to= '/product' className='font-semibold hover:underline' >Others</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold">About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link>
                    <p className='font-semibold'>News</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-semibold '>Partnership</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-semibold '>FAQ</p>
                </Link>
              </li>
              <li>
                <Link onClick={openModal}>
                    <p className='font-semibold '>How to Order</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-">
            <h3 className="uppercase font-bold ">Get In Touch</h3>
            <ul className="space-y-1">
              <li>
                <Link to='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'>
                  <p className='font-semibold'>+62 818-688-448</p>
                </Link>
              </li>
              <li>
                <Link to='mailto:sundaybeststoreid@gmail.com?subject=Having%20Interest'>
                  <p className='font-semibold text-sm'>sundaybeststoreid@gmail.com</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link to='https://www.instagram.com/sundaybestid/'>
                <FontAwesomeIcon icon={faInstagram} style= {{fontSize: '1.5rem'}}/>
              </Link>
              <Link to='https://www.youtube.com/@sundaybeststore'>
                  <FontAwesomeIcon icon={faYoutube} style= {{fontSize: '1.5rem'}}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center font-bold">© 2023 SundayBest. ALL RIGHTS RESERVED.</div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-100 transition-opacity"
         style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)', backdropFilter: 'blur(5px)' }}>
        <div className="absolute bg-background-light-100 p-4 w-[90%] h-[90%] md:w-[800px] md:h-[500px] rounded-lg"
        style={{ backgroundImage: "url('/bgl.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'none' }}>
          <div className='flex justify-between'>
            <div className='pl-6'>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#FFCB45] font-bold lg:text-xl text-base'>How it works</h1>
              <h1 className='font-bold lg:text-2xl pl-1 text-base'>What We Serve</h1>
              <h2 className='font-semibold text-sm lg:text-base text-center'>
                Product Quality is Our Priority, And Always Gurantees <br /> Halal And Safety Until It is in Your Hands
              </h2>
            </div>
            <div className='justify-end'>
              <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '1.5rem', color: '#F1EA3E'}}/>
            </div>
          </div>
          <div className='flex flex-wrap justify-center mx-5 lg:grid lg:grid-cols-3 mt-10 items-center gap-3'>
            <div className='flex flex-col items-center gap-3 lg:gap-4'>
              <img src={Logo} alt="" className='w-20 md:w-32'/>
              <h1 className='font-semibold text-sm lg:text-base'>Visit Our Web</h1>
              <p className='text-center text-sm lg:text-base'>Choose what to <br /> order through our <br />web</p>
            </div>
            <div className='flex flex-col items-center gap-3 mt-4 lg:gap-4 lg:mt-6'>
              <img src={Order} alt="" className='w-16 md:w-24'/>
              <h1 className='font-semibold text-sm lg:text-base'>Finish Order</h1>
              <p className='text-center text-sm lg:text-base'>We will direct you <br /> to Tokopedia or <br />Shopee to finish <br />order</p>
            </div>
            <div className='flex  flex-col items-center gap-3 lg:gap-4 mb-[40px]'>
              <img src={Courier} alt="" className='w-16 md:w-[118px]'/>
              <h1 className='font-semibold text-sm lg:text-base'>Visit Our Web</h1>
              <p className='text-center text-sm lg:text-base'>The best quality of<br /> booze for yoi</p>
            </div>
          </div>
        </div>
      </div>
    )}

</footer>
  )
}