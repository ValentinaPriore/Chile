var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');

 
var myChart = new Chart(ctx, {

type: 'bar',
data: {
  labels: ['Kast', 'Boric',  'Provoste', 'Sichel', 'Enríquez-Ominami', 'Parisi', 'Artes'],
  datasets: [{
     

      data: [21, 20, 12, 7, 6, 4, 3],
      backgroundColor: [
          'rgba(143, 176, 217, 0.8)',
          'rgba(245, 59, 71, 0.8)',
          'rgba(204, 104, 222, 0.8)',
          'rgba(233, 196, 106, 0.8)',
          'rgba(29, 53, 87, 0.8)',
          'rgba(255, 175, 204, 0.8)',
          'rgba(145, 18, 29, 0.8)'

      ],
      borderColor: [
          'rgba(143, 176, 217, 1)',
          'rgba(245, 59, 71,  1)',
          'rgba(204, 104, 222, 1)',
          'rgba(233, 196, 106, 1)',
          'rgba(29, 53, 87, 1)',
          'rgba(255, 175, 204, 1)',
          'rgba(145, 18, 29, 1)'
      ],
      borderWidth: 1
  }]
},
options: {

scales: {
         yAxes: [
             {
                 
                 ticks: {
                     callback: function(value, index, values) {
                         return value + "%";
                     }
                 },
                
             }   
         ]
       },
 tooltips: {
 callbacks: {
     label: function(tooltipItem) {
         return Number(tooltipItem.yLabel) + "% de la intención de voto";
     }
 }
},
 responsive: true,
 maintainAspectRatio: false,
 legend: { display: false },
 title: {
         text: 'Fuente: encuestadora Cadem',
         display: true,
         position: 'bottom',
         align: 'start'
     },
 
 plugins: {
     legend: {
         display: false,
     },
     title: {
         
         position: 'bottom',
         align: 'start'
     },
     
 }
     
  
}
});
var myChart1 = new Chart(ctx1, {

type: 'bar',
data: {
  labels: ['Boric', 'Kast', 'Provoste', 'Sichel', 'Parisi', 'Enríquez-Ominami', 'Artés'],
  datasets: [{
     

      data: [21, 16, 13, 7,	5, 3, 2],
      backgroundColor: [
        'rgba(143, 176, 217, 0.8)',
        'rgba(245, 59, 71, 0.8)',
        'rgba(204, 104, 222, 0.8)',
        'rgba(233, 196, 106, 0.8)',
        'rgba(29, 53, 87, 0.8)',
        'rgba(255, 175, 204, 0.8)',
        'rgba(145, 18, 29, 0.8)'

      ],
      borderColor: [
        'rgba(143, 176, 217, 1)',
        'rgba(245, 59, 71,  1)',
        'rgba(204, 104, 222, 1)',
        'rgba(233, 196, 106, 1)',
        'rgba(29, 53, 87, 1)',
        'rgba(255, 175, 204, 1)',
        'rgba(145, 18, 29, 1)'
      ],
      borderWidth: 1
  }]
},
options: {

scales: {
         yAxes: [
             {
                 
                 ticks: {
                    beginAtZero: true,
                     callback: function(value, index, values) {
                         return value + "%";
                         
                     }
                 },
                
             }   
         ]
       },
 tooltips: {
 callbacks: {
     label: function(tooltipItem) {
         return Number(tooltipItem.yLabel) + "% de la intención de voto";
     }
 }
},
 responsive: true,
 maintainAspectRatio: false,
 legend: { display: false },
 title: {
         text: 'Fuente: encuestadora Cadem',
         display: true,
         position: 'bottom',
         align: 'start'
     },
 
 plugins: {
     legend: {
         display: false,
     },
     title: {
         
         position: 'bottom',
         align: 'start'
     },
     
 }
     
  
}
});


var myChart2 = new Chart(ctx2, {

type: 'line',
data: {
labels: ['30/7', '6/8', '13/8', '20/8', '27/8', '3/9', '10/9', '16/9', '24/9', '1/10', '8/10', '14/10'],
datasets: [
{
 label: 'Boric',
 data: [24, 21, 24, 24, 20, 23, 22, 25, 23, 22, 21, 20],
 borderColor: 'rgba(143, 176, 217, 1)',
 backgroundColor: 'rgba(143, 176, 217, 0)',
},
{
 label: 'Kast',
 data: [7, 10, 9, 10, 10, 12, 9, 10, 13, 15, 18, 21],
 borderColor: 'rgba(245, 59, 71,  1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
 label: 'Provoste',
 data: [13, 10, 9, 9, 13, 12, 10, 9, 10, 12, 13, 12],
 borderColor: 'rgba(204, 104, 222, 1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
 label: 'Sichel',
 data: [24, 24, 22, 19, 20, 19, 19, 17, 17, 12, 10, 7],
 borderColor: 'rgba(233, 196, 106, 1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
 label: 'Enríquez-Ominami',
 data: [0, 0, 0, 0, 3, 2, 3, 5, 4, 5, 4, 4],
 borderColor: 'rgba(255, 175, 204, 1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},

{
 label: 'Parisi',
 data: [0, 0, 0, 0, 7, 7, 8, 6, 5, 5, 6, 6],
 borderColor: 'rgba(29, 53, 87, 1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},

{
 label: 'Artés',
 data: [0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 1, 3],
 borderColor: 'rgba(145, 18, 29, 1)',
 backgroundColor:'rgba(29, 53, 87, 0)' ,
},

]
},
options: {
bezierCurve : false,
responsive: true,
maintainAspectRatio: false,
stacked: false,
title: {
         text: 'Fuente: encuestadora Cadem',
         display: true,
         position: 'bottom',
         align: 'start'
     },
plugins: {
title: {
         text: 'Fuente: encuestadora Cadem',
         display: true,
         position: 'bottom',
         align: 'start'
     },
},
scales: {
         yAxes: [
             {
                beginAtZero: true,
                 ticks: {
                     callback: function(value, index, values) {
                         return value + "%";
                     }
                 },
                
             }   
         ]
       },
elements: {
 line: {
     tension: 0
 }
}
},

});
var myChart3 = new Chart(ctx3, {

type: 'line',
data: {
labels: ['Ago 21-2', 'Sept 21-1', 'Sept 21-2', 'Oct 21-1'],
datasets: [
{
label: 'Boric',
data: [14, 20, 20, 21],
borderColor: 'rgba(143, 176, 217, 1)',
backgroundColor: 'rgba(143, 176, 217, 0)',
},
{
label: 'Kast',
data: [6, 9, 14, 16],
borderColor: 'rgba(245, 59, 71,  1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
label: 'Provoste',
data: [11, 10, 9, 13, ],
borderColor: 'rgba(204, 104, 222, 1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
label: 'Sichel',
data: [11, 12, 12, 7],
borderColor: 'rgba(233, 196, 106, 1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},
{
label: 'Enríquez-Ominami',
data: [4, 0, 3, 3],
borderColor: 'rgba(255, 175, 204, 1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},

{
label: 'Parisi',
data: [6, 7, 6, 5],
borderColor: 'rgba(29, 53, 87, 1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},

{
label: 'Artés',
data: [1, 2, 1, 2],
borderColor: 'rgba(145, 18, 29, 1)',
backgroundColor:'rgba(29, 53, 87, 0)' ,
},

]
},
options: {
bezierCurve : false,
responsive: true,
maintainAspectRatio: false,
stacked: false,
title: {
        text: 'Fuente: encuestadora Cadem',
        display: true,
        position: 'bottom',
        align: 'start'
    },
plugins: {
title: {
        text: 'Fuente: encuestadora Cadem',
        display: true,
        position: 'bottom',
        align: 'start'
    },
},
scales: {
        yAxes: [
            
            {
                
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value + "%";
                    }
                },
               
            }   
        ]
      },
elements: {
line: {
    tension: 0
}
}
},

});