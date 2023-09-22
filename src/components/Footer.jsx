import React from 'react'
import Logo from '../assets/logo.png'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-background-light-400 h-full">
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
            <h3 className="font-bold uppercase ">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link>
                  <p className='font-medium'>About Us</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-medium'>How It Works</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" uppercase font-bold">Policy</h3>
            <ul className="space-y-1">
              <li>
                <Link>
                    <p className='font-medium'>FAQ</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-medium'>Privacy</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-medium'>Shipping</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold">Get In Touch</h3>
            <ul className="space-y-1">
              <li>
                <p className='font-medium'>+91 123 4567 8900</p>
              </li>
              <li>
                <p className='font-medium'>food@example.com</p>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center font-bold">© 2023 Sunday Best. ALL RIGHTS RESERVED.</div>
</footer>
    



  )
}

export default Footer