import React, { useEffect, useState, useRef, memo } from "react";
import "./HeaderTicker.css";
import axios from "axios";

function HeaderTicker(props) {
  // console.log("props :: ", props);
  // const [data, setData] = useState([]);

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "BMFBOVESPA:${props.code}",
        "width": "100%",
        "locale": "br",
        "colorTheme": "dark",
        "isTransparent": true
      }`;
    container.current.appendChild(script);

    // fetchData(props.code);
  }, []);

  // async function fetchData(code) {
  //   try {
  //     let search = {
  //       code: code
  //     }
  //     const response = await axios.post('http://localhost:3030/chatterbot/tickerPrice', search);

  //     console.log("valor do ativo: ", response);

  //     // setData(response.data.price);
  //   } catch (error) {
  //     console.error('Erro:', error);
  //   }
  // }

  return (
    <>
      <div
        className="tradingview-widget-container header-ticker"
        ref={container}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
      {/* <div className='ticker-price'>
      <span className='price'>COTAÇÃO: R${data}</span>
    </div> */}
    </>
  );
}

export default HeaderTicker;
