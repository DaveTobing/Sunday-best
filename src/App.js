import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Partnership from "./pages/Partnership";
import Product from "./pages/Product";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

export const App = () => {
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
              <Product/>
            }/>
            <Route          
            path="/Store"
            element={
              <Store/>
            }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
