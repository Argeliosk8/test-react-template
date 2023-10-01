import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";


ChartJS.register(
ArcElement, 
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend);

export const Dashboard = ()=>{
  const optionsPie = {
    responsive: true,
  };
  const dataPie = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: 'rgb(53, 12, 245)',
        backgroundColor: 'rgba(53, 12, 245, 0.5)',
      },
    ],
  };


    return(
        <>
          <div className="container">
            <Doughnut data={dataPie} options={optionsPie}/>
          </div>
          <div className="container">
            <Line data={dataLine} options={optionsLine}></Line>
          </div>
        </>
    )
}