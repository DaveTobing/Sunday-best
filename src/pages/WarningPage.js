import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './WarningPage.css';

function WarningPage({ onVerify }) {
    const handleYesClick = () => {
        onVerify();
    }

    return (
        <div className="warning-wrapper">
            <div className="warningPage">
                <div className="content">
                    <img src="../assets/logo.png" alt="Logo" className="logo"/>
                    <h1>Toast to your special day!</h1>
                    <p>We need to verify you're 21 before we let you browse and purchase from this website</p>
                    <div className="buttons">
                        <button onClick={handleYesClick}>Yes, I'm over 21</button>
                        <button>No, I am not</button>
                    </div>
                    <div className="socials">
                        <SocialIcon network="instagram" bgColor="transparent" style={{ height: 25, width: 25 }}/>
                        <SocialIcon network="whatsapp" bgColor="transparent" style={{ height: 25, width: 25 }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarningPage;
