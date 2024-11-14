import "./Ticker.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderTicker from "../../TradingView/HeaderTickerTV";
import Header from "../../layout/Header";
import InfoTicker from "../../TradingView/InfoTickerTV";
import CompanyInfo from "../../TradingView/CompanyInfoTV";
import StopwatchTicker from "../../TradingView/StopwatchTickerTV";
import GraphTickerTradingView from "../../TradingView/GraphTickerTV";
import MyCalendar from "./MyCalendar";
import Cookies from "js-cookie";
import axios from "axios";
import Message from "../../layout/Message";
import TopMarketTV from "../../TradingView/TopMarketTV";

function Ticker(props) {
  const [haveToken, setHaveToken] = useState(false);
  const [showMessageValid, setshowMessageValid] = useState(false);
  const [showMessageInvalid, setshowMessageInvalid] = useState(false);

  useEffect(() => {
    getTokenInfo();

    if (showMessageValid) {
      const timer = setTimeout(() => {
        setshowMessageValid(false);
      }, 5000);

      return () => clearTimeout(timer);
    }

    if (showMessageInvalid) {
      const timer = setTimeout(() => {
        setshowMessageInvalid(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessageValid, showMessageInvalid]);

  async function getTokenInfo() {
    try {
      const token = Cookies.get("token");

      if (token && token != undefined && token != null) {
        setHaveToken(true);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const location = useLocation();

  let code = "Código do ativo não encontrado";
  let name = "Ativo não encontrado";

  if (location.state.code && location.state.name) {
    name = location.state.name;
    code = location.state.code;
  }

  const FavoriteTicker = async () => {
    const email = Cookies.get("email");
    const userName = Cookies.get("name");

    var data = {
      code: code,
      name: name,
      userEmail: email,
      userName: userName,
    };

    const response = await axios.post(
      "http://localhost:3030/chatterbot/favorite",
      data
    );

    if (response.data.status === 500) {
      setshowMessageInvalid(true);
    }

    if (response.data.status === 200) {
      setshowMessageValid(true);
    }
  };

  return (
    <>
      <Header></Header>

      {showMessageValid && (
        <Message valid={true} message={"Ativo adicionado aos favoritos!"} />
      )}
      {showMessageInvalid && (
        <Message
          valid={false}
          message={"Erro ao adicionar ativo aos favoritos"}
        />
      )}

      <HeaderTicker code={code} name={name}></HeaderTicker>
      <GraphTickerTradingView code={code} name={name}></GraphTickerTradingView>
      <InfoTicker code={code} name={name}></InfoTicker>
      <CompanyInfo code={code} name={name}></CompanyInfo>

      <div className="home-contents-tw">
        <StopwatchTicker code={code} name={name}></StopwatchTicker>
        <TopMarketTV></TopMarketTV>
      </div>

      <MyCalendar code={code} name={name}></MyCalendar>
    </>
  );
}

export default Ticker;
