import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './WarningPage.css';
import logo from '../assets/logo.png';

function WarningPage({ onVerify }) {
    const handleYesClick = () => {
        onVerify();
    }

    return (
      <div className='warning-wrapper'>
        <div className='warningPage'>
          <div className='content'>
            <img src={logo} alt='Logo' className='logo' />
            <h1 className='text-black font-semibold'>Toast to your special day!</h1>
            <p className='text-black'>
              We need to verify you're 21 before we let you browse and purchase
              from this website
            </p>
            <div className='buttons'>
              <button onClick={handleYesClick} className='text-black font-semibold'>Yes, I'm over 21</button>
              <button className='text-black font-semibold'>No, I am not</button>
            </div>
            <div className='socials'>
              <a
                href='https://www.instagram.com/sundaybestid/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SocialIcon
                  network='instagram'
                  bgColor='transparent'
                  style={{ height: 25, width: 25 }}
                />
              </a>
              <a
                href='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SocialIcon
                  network='whatsapp'
                  bgColor='transparent'
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WarningPage;
