import React, { useEffect, useState, useRef, memo } from 'react';
import "./StopwatchTicker.css"
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';


function StopwatchTicker(props) {
  console.log("props :: ", props);
  const container = useRef();

  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetchData();
    fetchDataPrice(props.code);

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

  async function fetchDataPrice(code) {
    try {
      let search = {
        code: code
      }
      const response = await axios.post('http://localhost:3030/chatterbot/tickerPrice', search);

      // console.log("valor do ativo stopwatch: ", response);
  
      setPrice(response.data.price);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  // DATA ATUAL
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const dataFormatada = `${ano}-${mes}-${dia}`;

  // DATA FUTURA
  const dataFutura = new Date(dataFormatada);
  dataFutura.setDate(dataFutura.getDate() + 40);
  const novoAno = dataFutura.getFullYear();
  const novoMes = String(dataFutura.getMonth() + 1).padStart(2, '0');
  const novoDia = String(dataFutura.getDate()).padStart(2, '0');
  const novaDataFormatada = `${novoAno}-${novoMes}-${novoDia}`;


  const candlestickData = [
    {
      x: new Date(dataFormatada).getTime(),
      y: [price],
    },
    {
      x: new Date(novaDataFormatada).getTime(),
      y: [data.graham],
    }
  ];

  const options = {
    chart: {
      type: 'candlestick',
    },
    title: {
      text: `Tendência de preço justo de ${props.code}`,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <>
    <div>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>

      <div>
        <span>De acordo com a análise de preço justo de ativos, o valor da empresa é: <strong>R${data.graham}</strong></span>
      </div>

      <div className='graph-apex'>
        <ReactApexChart options={options} series={[{ data: candlestickData }]} width={1200} height={450} />
      </div>
      
    </div>
    </>

  );
}

export default StopwatchTicker;
