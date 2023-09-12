import "./GraphTicker.css"
import React, { useEffect, useState, useRef, memo } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

function GraphTicker(props) {
  const [data, setData] = useState([]);


  useEffect(() => {
    // fetchData(props.code);
    // const intervalId = setInterval(fetchData, 4000);
    // return () => clearInterval(intervalId);
  }, []);

  async function fetchData(code) {
    try {
      let search = {
        code: code
      }
      const response = await axios.post('http://localhost:3030/chatterbot/chart', search);

      console.log(response);
  
      const responseJSON = JSON.parse(response.data.results.split('\r\n')[1]);

      console.log("responseJSON", responseJSON);
  
      const candlestickData = responseJSON.map((rowData, index) => ({
        x: responseJSON.index[index], // Use o valor do índice como a data
        y: rowData.slice(0, 4), // Valores Open, High, Low e Close
      }));
  
      setData(candlestickData);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  // const candlestickData = [
  //   {
  //     x: new Date('2023-01-01').getTime(),
  //     y: [6600, 6800, 6200, 6500],
  //   },
  //   {
  //     x: new Date('2023-01-02').getTime(),
  //     y: [6500, 6700, 6300, 6600],
  //   }
  //   // Adicione mais dados de velas aqui
  // ];

  const options = {
    chart: {
      type: 'candlestick',
    },
    title: {
      text: `Gráfico de ${props.code}`,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={[{ data: data }]} type="candlestick" height={350} />
    </div>
  );
}

export default memo(GraphTicker);
