import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { useState } from "react"
import WarningPage from './pages/WarningPage';
import LandingPage from "./pages/LandingPage";
import Product from "./pages/Product";
import Store from "./pages/Store";
import Partnership from "./pages/Partnership";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
import Article5 from "./components/Article5";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsappbutton";
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
          <Navbar />
          <Whatsapp />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/product' element={<Product />} />
            <Route path='/partnership' element={<Partnership />} />
            <Route path='/store' element={<Store />} />
            <Route path='/Article1' element={<Article1 />} />
            <Route path='/Article2' element={<Article2 />} />
            <Route path='/Article3' element={<Article3 />} />
            <Route path='/Article4' element={<Article4 />} />
            <Route path='/Article5' element={<Article5 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DarkModeProvider>
    </ChakraProvider>
  );
}

export default App ;
