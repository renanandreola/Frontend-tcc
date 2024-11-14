import React, { useEffect, useRef } from "react";
import "./styles/HeaderTickerTV.css";

function HeaderTicker(props) {
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
  }, []);

  return (
    <>
      <div
        className="tradingview-widget-container header-ticker"
        ref={container}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
}

export default HeaderTicker;
