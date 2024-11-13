import React from "react";
import "./Home.css";
// import ActivesInitial from "./subcomponents/Actives";
import MainWidgetTradingView from "./TradingView/MainWidgetTV";
import MarketDataTradingView from "./TradingView/MarketDataTV";
import TopMarketTradingView from "./TradingView/TopMarketTV";
import Header from "../../layout/Header";

function Home() {
  return (
    <div className="Home-general">
      <Header></Header>
      <MainWidgetTradingView></MainWidgetTradingView>
      <div className="home-contents-tw">
        <MarketDataTradingView></MarketDataTradingView>
        <TopMarketTradingView></TopMarketTradingView>
      </div>
      {/* <ActivesInitial></ActivesInitial> */}
    </div>
  );
}

export default Home;
