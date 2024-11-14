import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function StopwatchTicker(props) {
  const container = useRef();

  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetchData();
    fetchDataPrice(props.code);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "interval": "1m",
      "width": "49%",
      "isTransparent": true,
      "height": "500",
      "symbol": "BMFBOVESPA:${props.code}",
      "showIntervalTabs": true,
      "locale": "br",
      "colorTheme": "dark"
    }`;
    container.current.appendChild(script);
  }, []);

  async function fetchData() {
    try {
      let search = {
        code: props.code,
      };
      const response = await axios.post(
        "http://localhost:3030/chatterbot/tickerInfo",
        search
      );
      setData(response.data.info);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function fetchDataPrice(code) {
    try {
      let search = {
        code: code,
      };
      const response = await axios.post(
        "http://localhost:3030/chatterbot/tickerPrice",
        search
      );

      setPrice(response.data.price);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div>
        <span>De acordo com a análise de preço justo de ativos, o valor da empresa é: <strong>R${data.graham}</strong></span>
      </div> */}
    </div>
  );
}

export default StopwatchTicker;
