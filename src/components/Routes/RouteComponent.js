import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Register from '../Pages/Register/Register';
import ListActions from '../Pages/ListActions/ListActions'

function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/actions" element={<ListActions />} />
      </Routes>
    </Router>
  );
}

export default RouteComponent;