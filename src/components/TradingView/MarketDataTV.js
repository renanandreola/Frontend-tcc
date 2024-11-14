import React, { useEffect, useRef, memo } from "react";

function MarketTradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
      "width": "49%",
      "height": "550",
      "symbolsGroups": [
        {
          "name": "Indices",
          "originalName": "Indices",
          "symbols": [
            {
              "name": "BMFBOVESPA:VALE3",
              "displayName": "Vale"
            },
            {
              "name": "BMFBOVESPA:PETR4",
              "displayName": "Petrobras"
            },
            {
              "name": "BMFBOVESPA:BBAS3",
              "displayName": "BRASIL ON NM"
            },
            {
              "name": "BMFBOVESPA:WEGE3",
              "displayName": "WEG ON NM"
            },
            {
              "name": "BMFBOVESPA:PRIO3",
              "displayName": "PETRORIO ON NM"
            },
            {
              "name": "BMFBOVESPA:EMBR3",
              "displayName": " EMBRAER ON NM"
            },
            {
              "name": "BMFBOVESPA:ITUB4",
              "displayName": " ITAUUNIBANCOPN EJ N1"
            },
            {
              "name": "BMFBOVESPA:BBDC4",
              "displayName": " BRADESCO PN EJ N1"
            },
            {
              "name": "BMFBOVESPA:MGLU3",
              "displayName": "MAGAZINE LUIZA ON NM"
            },
            {
              "name": "BMFBOVESPA:BBSE3",
              "displayName": " BBSEGURIDADEON NM"
            },
            {
              "name": "BMFBOVESPA:ITSA4",
              "displayName": "ITAUSA PN N1"
            },
            {
              "name": "BMFBOVESPA:USIM5",
              "displayName": "USIMINAS PNA N1"
            },
            {
              "name": "BMFBOVESPA:B3SA3",
              "displayName": " B3 ON NM"
            },
            {
              "name": "BMFBOVESPA:IRBR3",
              "displayName": "IRB(RE) ON NM"
            },
            {
              "name": "BMFBOVESPA:OIBR3",
              "displayName": " OI ON N1"
            },
            {
              "name": "BMFBOVESPA:BRAV3",
              "displayName": " BRAVA ON NM"
            },
            {
              "name": "BMFBOVESPA:CSNA3",
              "displayName": " SID NACIONALON"
            },
            {
              "name": "BMFBOVESPA:BRFS3",
              "displayName": " BRF SA ON NM"
            },
            {
              "name": "BMFBOVESPA:EGIE3",
              "displayName": " ENGIE BRASILON NM"
            },
            {
              "name": "BMFBOVESPA:MRFG3",
              "displayName": "MARFRIG ON NM"
            },
            {
              "name": "BMFBOVESPA:CSAN3",
              "displayName": " COSAN ON NM"
            }
          ]
        },
        {
          "name": "Futures",
          "originalName": "Futures",
          "symbols": [
            {
              "name": "CME_MINI:ES1!",
              "displayName": "S&P 500"
            },
            {
              "name": "CME:6E1!",
              "displayName": "Euro"
            },
            {
              "name": "COMEX:GC1!",
              "displayName": "Gold"
            },
            {
              "name": "NYMEX:CL1!",
              "displayName": "WTI Crude Oil"
            },
            {
              "name": "NYMEX:NG1!",
              "displayName": "Gas"
            },
            {
              "name": "CBOT:ZC1!",
              "displayName": "Corn"
            }
          ]
        },
        {
          "name": "Bonds",
          "originalName": "Bonds",
          "symbols": [
            {
              "name": "CBOT:ZB1!",
              "displayName": "T-Bond"
            },
            {
              "name": "CBOT:UB1!",
              "displayName": "Ultra T-Bond"
            },
            {
              "name": "EUREX:FGBL1!",
              "displayName": "Euro Bund"
            },
            {
              "name": "EUREX:FBTP1!",
              "displayName": "Euro BTP"
            },
            {
              "name": "EUREX:FGBM1!",
              "displayName": "Euro BOBL"
            }
          ]
        },
        {
          "name": "Forex",
          "originalName": "Forex",
          "symbols": [
            {
              "name": "FX:EURUSD",
              "displayName": "EUR to USD"
            },
            {
              "name": "FX:GBPUSD",
              "displayName": "GBP to USD"
            },
            {
              "name": "FX:USDJPY",
              "displayName": "USD to JPY"
            },
            {
              "name": "FX:USDCHF",
              "displayName": "USD to CHF"
            },
            {
              "name": "FX:AUDUSD",
              "displayName": "AUD to USD"
            },
            {
              "name": "FX:USDCAD",
              "displayName": "USD to CAD"
            }
          ]
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "br",
      "backgroundColor": "#ffffff"
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default memo(MarketTradingViewWidget);
