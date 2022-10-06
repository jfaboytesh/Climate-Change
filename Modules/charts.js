import getData from './data_fetch.js'
import {xlabels, ylabels} from './data_fetch.js'

export default async function chart() {  

  const fetchData = await getData();

  const data = {
    labels: xlabels,
    datasets: [{
      label: 'Global Warming',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: ylabels,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}