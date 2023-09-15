import "./WidgetTradingView.css"
import React, { useEffect, useRef, memo } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_ac571') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 1200,
            height: 600,
            symbol: "BMFBOVESPA:IBOV",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "3",
            locale: "br",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_ac571"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ac571' />
    </div>
  );
}

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "symbols": [
//             [
//                 "Ibovespa",
//                 "IBOV|1D"
//             ]
//           ],
//           "chartOnly": false,
//           "width": 1200,
//           "height": 500,
//           "locale": "br",
//           "colorTheme": "dark",
//           "autosize": false,
//           "showVolume": false,
//           "showMA": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "fontSize": "10",
//           "noTimeScale": false,
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "chartType": "area",
//           "maLineColor": "#2962FF",
//           "maLineWidth": 1,
//           "maLength": 9,
//           "lineWidth": 2,
//           "lineType": 0,
//           "dateRanges": [
//             "1d|1",
//             "1m|30",
//             "3m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ]
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright"><a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Monitore todos os mercados no TradingView</span></a></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
