import React, { useEffect, useRef, memo } from 'react';
import "./HeaderTicker.css"

function HeaderTicker(props) {
  console.log("props :: ", props);
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "BMFBOVESPA:${props.code}",
          "width": "100%",
          "locale": "br",
          "colorTheme": "light",
          "isTransparent": true
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container header-ticker" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default HeaderTicker;
