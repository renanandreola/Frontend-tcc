import "./GraphTicker.css";
import React, { useEffect, useState, useRef, memo } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

function GraphTicker(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(props.code);
  }, []);

  async function fetchData(code) {
    try {
      let search = {
        code: code,
      };
      const response = await axios.post(
        "http://localhost:3030/chatterbot/chart",
        search
      );

      // console.log(response.data.prices);

      setData(response.data.prices);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  let dataGrafico = [];

  data.map(function (obj) {
    // console.log(obj);

    dataGrafico.push({
      x: new Date(`${obj.date.split("T")[0]}`).getTime(),
      y: [obj.close, obj.high, obj.low, obj.open],
    });
  });

  const candlestickData = [
    {
      x: new Date("2023-01-01").getTime(),
      y: [6600, 6800, 6200, 6500],
    },
    {
      x: new Date("2023-01-02").getTime(),
      y: [6500, 6700, 6300, 6600],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
    },
    title: {
      text: `Gráfico de ${props.code}`,
    },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div className="chart">
      <ReactApexChart
        options={options}
        series={[{ data: dataGrafico }]}
        height={450}
      />
    </div>
  );
}

export default memo(GraphTicker);
