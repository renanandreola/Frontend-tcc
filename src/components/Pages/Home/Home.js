import React from "react";
import ActivesInitial from "./Actives";
import WidgetTradingView from "./WidgetTradingView";
import Header from "../../layout/Header";

function Home() {
  return (
    <div className="Home-general">
      <Header></Header>
      <WidgetTradingView></WidgetTradingView>
      <ActivesInitial></ActivesInitial>
    </div>
  );
}

export default Home;
