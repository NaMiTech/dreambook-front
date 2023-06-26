import React from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function getLabelForValue(val){

  var label = ''
  switch (val) {
    case -1:
      label = '😢'
      break;
    case 0:
      label = '😐'
      break;
    case 1:
    label = '🙂'
      break;
    default:
      label = ''
      break;
  }
  return label

}

function getTextLabelForValue(val){
  let label = '';
  switch (val) {
    case -1:
      label = '  Negativo';
      break;
    case 0:
      label = ' Neutral';
      break;
    case 1:
      label = ' Positivo'
      break;
    default:
      break;
  }
  return label;
}

export const options = {
  responsive: true,
  plugins: {
    tooltip:{
      titleColor: '#FFFFFF',
      titleAlign: 'center',
      titleFont: {size: 16},
      titleMarginBottom: 6,
      bodyAlign: 'center',
      bodyFont: {size: 30},
      footerFont: {size: 10},
      footerAlign: 'center',
      footerMarginTop: 6,
      displayColors: false,
      callbacks: {
        title: function(){return 'Sentimiento'},
        label: function(context) {return getLabelForValue(context.parsed.y)},
        labelTextColor: function() {return '#FFFFFF';},
        footer: function(tooltipItems){return getTextLabelForValue(tooltipItems[0].parsed.y)}
      }
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      pointRadius: 6,
      ticks:{
        callback: function(val, index){return getLabelForValue(val)}
      },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      pointRadius: 6,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Vigilia',
      data:  [1, 1, 0, -1, 1, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Sueños',
      data: [0, 0, 1, -1, 1, 1],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export const GraphComponent = () => {
  const selectYear = useSelector((state)=>state.date.year);
    return(
        <>
        <h3>Evolución del {selectYear}</h3>
        <Line 
        options={options} 
        data={data} />
        </>
      )
}