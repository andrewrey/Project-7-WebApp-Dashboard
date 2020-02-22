//                                    //
//          TRAFFIC FULL WIDTH        //
//                                    //

const trafficChart = document.querySelector('#traffic-chart');

let myChart = new Chart(trafficChart,{
    type: 'line',
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data:[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(168, 50, 153)',
        lineTension: 0.1
      }],
    },
    options:{
      animation: {
        durration: 0
      },
      legend: {
        display: false
      },
      scales:{
        yAxes:[{
          gridLines:{
            color: "pink"
          },
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
});