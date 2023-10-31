import React, {useState, useEffect} from "react";
import './HomeLogged.css';
import Header from "../../layout/Header";
import Cookies from 'js-cookie';
import TelegramLink from './TelegramLink'
import FavoriteTickers from "./FavoriteTickers";
import SerachTickers from "./SerachTickers";
import WidgetTradingView from "../Home/WidgetTradingView";
import Actives from "../Home/Actives"
import CalendarFavorites from "./CalendarFavorites";
import BestPJ from "./BestPJ";
import EventsCalendar from "./EventsCalendar";

function HomeLogged() {
    const token = Cookies.get('token');
    const email = Cookies.get('email');
    
    console.log(token);
    console.log(email);

    if (!token || token == undefined || token == null) {
        window.location.pathname = "/"
    }

    return (
        <>
            <Header></Header>
            <TelegramLink></TelegramLink>

            <div className="content-line-one">
                <FavoriteTickers></FavoriteTickers>
                <SerachTickers></SerachTickers>
            </div>

            <div className="content-line-one">
                <CalendarFavorites></CalendarFavorites>
                <div className="right-content">
                    <BestPJ></BestPJ>
                    <EventsCalendar></EventsCalendar>
                </div>
            </div>

            <div className="mt-4">
                <WidgetTradingView></WidgetTradingView>
            </div>
            {/* <Actives></Actives> */}
        </>
    );
}

export default HomeLogged;