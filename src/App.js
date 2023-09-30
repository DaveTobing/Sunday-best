import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from "react"
import WarningPage from './pages/WarningPage';
import LandingPage from "./pages/LandingPage";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cookies from 'js-cookie';
import { ChakraProvider} from '@chakra-ui/react'
import { DarkModeProvider } from './context/darkmode'


function App ()  {
  const [ageVerified, setAgeVerified] = useState(!!Cookies.get('ageVerified'));
  
  const verifyAge = () => {
    setAgeVerified(true);
    // Instead of: localStorage.setItem('ageVerified', 'true');
    // Set a cookie that expires in 30 minutes
    Cookies.set('ageVerified', 'true', { expires: 1/48 }); 

  };

  // If age is not verified, show the warning page
  if (!ageVerified) {
    return <WarningPage onVerify={verifyAge} />;
  }
  // Otherwise, render the main app content

  return (
    <ChakraProvider>
      <DarkModeProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route          
                path="/"
                element={
                  <LandingPage/>
                }/>
                <Route          
                path="/product"
                element={
                  <Product/>
                }/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </DarkModeProvider>
    </ChakraProvider>
  )
}

export default App ;
