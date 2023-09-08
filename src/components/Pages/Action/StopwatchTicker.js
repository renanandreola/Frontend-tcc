import React, { useEffect, useRef, memo } from 'react';
import "./StopwatchTicker.css"

function StopwatchTicker(props) {
  console.log("props :: ", props);
  const container = useRef();

  useEffect(
    () => {
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
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default StopwatchTicker;
