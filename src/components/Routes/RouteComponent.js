import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import ListTickers from "../Pages/ListActions/ListTickers";
import Ticker from "../Pages/Action/Ticker";
import SearchResults from "../Pages/SearchResults/SearchResults";
import Login from "../Pages/Login/Login";
import HomeLogged from "../Pages/HomeLogged/HomeLogged";
import Profile from "../Pages/Profile/Profile";
import Crypto from "../Pages/Crypto/Crypto";

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
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeLogged />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cryptos" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;
