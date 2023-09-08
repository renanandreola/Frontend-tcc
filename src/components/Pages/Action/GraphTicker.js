import "./GraphTicker.css"
import React, { useEffect, useRef, memo } from 'react';
import { Bar } from 'react-chartjs-2';

function GraphTicker(props) {
  console.log("props :: ", props);

  const chartData = {
    labels: ['teste', 'teste2', 'teste3', 'teste4', 'teste5'],
    datasets: [
      {
        label: 'Quantidade de pixeis',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgb(156, 70, 71)',
        borderColor: 'rgb(156, 70, 71)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <Bar
        options={chartOptions}
        data={chartData}
        {...props}
      />
    </div>
  );

  // useEffect(() => {   
  //   const config = {
  //     type: 'bar',
  //     data: {
  //       labels: ['teste', 'teste2', 'teste3', 'teste4', 'teste5'],
  //       datasets: [{
  //         label: 'Quantidade de pixeis',
  //         data: [10, 20, 30, 40, 50],
  //         backgroundColor: [
  //           'rgb(156, 70, 71)',
  //         ],
  //         borderColor: [
  //           'rgb(156, 70, 71)',
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: false
  //         }
  //       }
  //     },
  //   };

  //   const image1 = new Chart(document.getElementById('grafico-histograma1'), config);

  //   return () => {
  //     // Limpe o gráfico quando o componente for desmontado para evitar vazamento de memória
  //     image1.destroy();
  //   };
  // });
  // // }, [labels, result]);

  // return (
  //   <canvas height="100" width="300" id="grafico-histograma1"></canvas>
  // );

}

export default (GraphTicker);
