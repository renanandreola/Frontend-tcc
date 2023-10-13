import React, {useState, useEffect} from "react";
import './HomeLogged.css';
import Header from "../../layout/Header";
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

function HomeLogged() {
    const location = useLocation();

    console.log("location", location);

    const token = Cookies.get('token');
    
    console.log(token);

    if (!token || token == undefined || token == null) {
        window.location.pathname = "/"
    }

    return (
        <>
            <Header></Header>
            <span>Home logged</span>
        </>
    );
}

export default HomeLogged;