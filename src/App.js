import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from "react"
import LandingPage from "./pages/LandingPage";
import Partnership from "./pages/Partnership";
import Product from "./pages/Product";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import datas from "./database/data"

function App ()  {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = datas.filter(
    (data) => data.title1.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Category Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Sort Filtering -----------
  const handleClick = (event) => {
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
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({img, title1, title2, Price, size}) => (
        <Cards
          key={Math.random()}
          img={img}
          title1={title1}
          title2={title2}
          Price={Price}
          size={size}
        />
      )
    );
  }

  const result = filteredData(datas, selectedCategory, query);
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route          
            path="/"
            element={
              <LandingPage/>
            }/>
            <Route          
            path="/Partnership"
            element={
              <Partnership/>
            }/>
            <Route          
            path="/Product"
            element={
              <Product result = {result}/>
            }/>
            <Route          
            path="/Store"
            element={
              <Store/>
            }/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
