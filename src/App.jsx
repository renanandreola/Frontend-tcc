import './App.css';
import React from 'react';

import RouteComponent from './components/Routes/RouteComponent';
import Header from './components/layout/Header';

export default () =>
    <div className="app">
        <Header></Header>
        <RouteComponent></RouteComponent>
    </div>

