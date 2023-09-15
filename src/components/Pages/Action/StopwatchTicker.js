import React, { useEffect, useState, useRef, memo } from 'react';
import "./StopwatchTicker.css"
import axios from 'axios';

function StopwatchTicker(props) {
  console.log("props :: ", props);
  const container = useRef();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
          "interval": "1m",
          "width": "500",
          "isTransparent": true,
          "height": "500",
          "symbol": "BMFBOVESPA:${props.code}",
          "showIntervalTabs": true,
          "locale": "br",
          "colorTheme": "dark"
      }`;
    container.current.appendChild(script);
  },[]);

  async function fetchData() {
    try {
      let search = {
        code: props.code
      }
      const response = await axios.post('http://localhost:3030/chatterbot/tickerInfo', search);
      console.log("TICKER INFO: ", response);
      setData(response.data.info);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <>
    <div>
      <span>De acordo com a análise de preço justo de ativos, o valor da empresa é: <strong>R${data.graham}</strong></span>
    </div>
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
    </>

  );
}

export default StopwatchTicker;
