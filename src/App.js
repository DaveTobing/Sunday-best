import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from "react"
import WarningPage from './pages/WarningPage';
import LandingPage from "./pages/LandingPage";
import Partnership from "./pages/Partnership";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import datas from "./database/data"
import Cookies from 'js-cookie';
import { ChakraProvider} from '@chakra-ui/react'
import { DarkModeProvider } from './context/darkmode'


function App ()  {
  const [ageVerified, setAgeVerified] = useState(!!Cookies.get('ageVerified'));
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = datas.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Category Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, type }) =>
          category === selected ||
          type === selected
      );
    }

    return filteredProducts.map(
      ({title, category, type, size, price, link_tokopedia, link_shopee, link_blibli, gambar}) => (
        <Cards
          key={Math.random()}
          img={gambar}
          title={title}
          category={category}
          type={type}
          size={size}
          price = {price}
          link_tokopedia = {link_tokopedia}
          link_shopee = {link_shopee}
          link_blibli = {link_blibli}
          gambar = {gambar}
        />
      )
    );
  }

  const result = filteredData(datas, selectedCategory, query);
  
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
                path="/partnership"
                element={
                  <Partnership/>
                }/>
                <Route          
                path="/product"
                element={
                  <Product result = {result} handleChange = {handleChange}/>
                }/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </DarkModeProvider>
    </ChakraProvider>
  )
}

export default App ;
