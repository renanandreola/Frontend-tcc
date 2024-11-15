import React, { useEffect, useRef } from "react";

function CompanyInfo(props) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "width": "100%",
      "height": "800",
      "colorTheme": "dark",
      "isTransparent": true,
      "symbol": "BMFBOVESPA:${props.code}",
      "locale": "br"
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container info-ticker" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default CompanyInfo;
