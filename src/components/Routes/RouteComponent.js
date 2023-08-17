import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Register from '../Pages/Register/Register';
import ListActions from '../Pages/ListActions/ListActions'
import Action from '../Pages/Action/Action';

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/actions" element={<ListActions />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;