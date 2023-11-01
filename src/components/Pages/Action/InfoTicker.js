import React, { useEffect, useRef, memo } from 'react';
import "./InfoTicker.css"

function InfoTicker(props) {
  // console.log("props :: ", props);
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "colorTheme": "dark",
            "isTransparent": true,
            "largeChartUrl": "",
            "displayMode": "regular",
            "width": "1300",
            "height": "800",
            "symbol": "BMFBOVESPA:${props.code}",
            "locale": "br"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container info-ticker" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default InfoTicker;
