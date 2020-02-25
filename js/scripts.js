////////////////////////////////////////
//          Bell Notifications        //
////////////////////////////////////////
const bellContainter = document.querySelector('.not-bell');
const bellNotifications = document.querySelector('.bell-notification');
bellNotifications.innerHTML = `     
    <ul>
      <li>Test 1</li>
      <li>Test 2</li>
    <ul>`;

bellContainter.addEventListener('click', (e)=>{
  bellNotifications.classList.toggle('hidden');
});





////////////////////////////////////////
//          TRAFFIC FULL WIDTH        //
////////////////////////////////////////


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
      aspectRatio: 2.5,
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


////////////////////////////////////////
//          DAILY TRAFFIC HALF        //
////////////////////////////////////////


const dailyTrafficChart = document.querySelector('#daily-traffic-chart');

let myDailyTrafficChart = new Chart(dailyTrafficChart, {
  type: 'bar',
  data:{
    labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      label: '# of Hits',
      data:[75, 115, 175, 125, 225, 200, 100], 
      backgroundColor: '#7475c1', 
      borderWidth: 1
    }]
  },
  options:{
    legend:{
      display: false
    },
    scales:{
      yAxes:[{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});



////////////////////////////////////////
//           MOBIL USERS HALF         //
////////////////////////////////////////


const mobileUsersChart = document.querySelector('#mobile-user-chart');

let myMobileChart = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data:{
    labels:['Desktop', 'Tablet', 'Phones'],
    datasets:[{
      label: '# of Users',
      data:[2000, 550, 500], 
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
      ], 
      borderWidth: 0
    }]
  },
  options:{
    legend:{
      position: 'right',
      labels:{
        boxWidth: 20,
        fontStyle: 'bold'
      }
    },
    scales:{
      yAxes:[{
        gridLines:{
          display: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
});