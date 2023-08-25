import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Register from '../Pages/Register/Register';
import ListTickers from '../Pages/ListActions/ListTickers'
import Ticker from '../Pages/Action/Ticker';
import SearchResults from '../Pages/SearchResults/SearchResults';

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tickers" element={<ListTickers />} />
        <Route path="/ticker" element={<Ticker />} />
        <Route path="/searchResults" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;