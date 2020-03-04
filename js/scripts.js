////////////////////////////////////////
//          Bell Notifications        //
////////////////////////////////////////
const bellContainer = document.querySelector('.not-bell');
const bell = document.querySelector('.bell');
const bellNotifications = document.querySelector('.bell-notification');
const notificationX = bellNotifications.querySelectorAll('span');
bellNotifications.innerHTML = `     
   <div>
     <p>New email waiting</p>
     <span>X</span>
   </div>
   <div>
     <p>Request for connection</p>
     <span>X</span>
   </div>
   <div>
     <p>New photos posted</p>
     <span>X</span>
   </div>`;

bell.addEventListener('click', ()=>{
  bellNotifications.classList.toggle('hidden');
});

bellContainer.addEventListener('click', (e)=>{
  let eventItem = e.target;
  let notificationDivs = bellNotifications.querySelectorAll('div');
  if (eventItem.tagName === 'SPAN'){
    let parentDiv = eventItem.parentNode;
    if(notificationDivs.length < 2){
      bellContainer.removeChild(bellNotifications);
    } else {
      bellNotifications.removeChild(parentDiv);
    }
  }
});


////////////////////////////////////////
//            Alert Bar               //
////////////////////////////////////////

const alertBar = document.querySelector('.alert-bar');
alertBar.innerHTML = `
<div class="inner-div">
  <p class="first"><strong>Alert</strong> You have <strong>6</strong> overdue items!!</p>
  <p class="close">X</p>
</div>`;

const close = alertBar.querySelector('.close');
const innerAlertDiv = alertBar.querySelector('div.inner-div');

alertBar.addEventListener('click', (e)=>{
  if(e.target.className ==="close"){
    let alertBarParent = alertBar.parentNode;
    alertBarParent.removeChild(alertBar);
  }
});




////////////////////////////////////////
//          TRAFFIC FULL WIDTH        //
////////////////////////////////////////
const trafficUl = document.querySelector('.traffic-linegraph ul');
const trafficLi = document.querySelectorAll('.traffic-linegraph li');
const trafficChart = document.querySelector('#traffic-chart');


////////Data Charts for Traffic Full Width & Options ///////////////////

const weeklyChart = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data:[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(168, 50, 153)',
        lineTension: 0.1
      }],
};

const dailyChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        data:[330, 600, 100, 250, 1500, 900, 1250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(168, 50, 153)',
        lineTension: 0.1
      }],
};



const hourlyChart = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
      datasets: [{
        data:[60, 100, 80, 300, 250, 200],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(168, 50, 153)',
        lineTension: 0.1
      }],
};


const monthlyChart = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data:[500, 1000, 300, 1500, 1300, 1800, 900, 1450, 1100, 1500, 2500, 2300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(168, 50, 153)',
        lineTension: 0.1
      }],
};

const trafficChartOptions = {
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
};


//////// Function for creating Traffic Chart/////////////////
function createTrafficChart(chartData, chartOptions){
  let myChart = new Chart(trafficChart, {
    type: 'line',
    data: chartData,
    options: chartOptions,  
  })
}


createTrafficChart(weeklyChart, trafficChartOptions);

trafficUl.addEventListener('click', (e)=>{
  let eventItem = e.target;
  if(eventItem.id === "hourly"){
    createTrafficChart(hourlyChart, trafficChartOptions);
  } else if (eventItem.id === "daily"){
    createTrafficChart(dailyChart, trafficChartOptions);
  } else if (eventItem.id === "weekly"){
    createTrafficChart(weeklyChart, trafficChartOptions);
  } else if (eventItem.id === "monthly"){
    createTrafficChart(monthlyChart, trafficChartOptions);
  }
  if (eventItem.tagName = 'LI'){
    for(let i = 0; i < trafficLi.length; i++){
      if(trafficLi[i] === eventItem){
        trafficLi[i].className += " selected";
      } else {
        trafficLi[i].className = '';
      }
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




////////////////////////////////////////
//   Message User with Search Bar     //
////////////////////////////////////////

const searchInput = document.querySelector('#message_search');

searchInput.addEventListener('keyup', (e)=>{
  let membersNames =['andrew reynolds', 'tim mannings', 'sarah lee', 'rudy grange'];
  let value = searchInput.value;
  let suggestions = membersNames.filter(name => name.includes(value));
  console.log(suggestions);
});