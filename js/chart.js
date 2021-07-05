Highcharts.chart('chart-gender', {
    chart: {
      type: 'variablepie'
    },
    colors: ['#4680ea', '#ef769d'],
    title: {
      text: `<h5>Relief Impacts </h5> <h2 class="heading-main">by Gender</h2>`
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Male',
        y: 505370,
        z: 92.9,
      
      }, {
        name: 'Female',
        y: 551500,
        z: 118.7,
      
      }]
    }]
  });


  Highcharts.chart('chart-type', {
    chart: {
      type: 'variablepie'
    },
    colors: ['#90ed7d', '#8085e9'],
    title: {
      text: `<h5>Relief Impacts </h5> <h2 class="heading-main">by Beneficiary Type</h2>`
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Individual',
        y: 2000,
        z: 92.9,
      
      }, {
        name: 'Institute',
        y: 150,
        z: 118.7,
      
      }]
    }]
  });


// Create the chart
Highcharts.chart('chart-category', {
    chart: {
      type: 'column'
    },
    title: {
      text: `<h5>Relief Impacts </h5> <h2 class="heading-main">Institution Category</h2>`
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Relief reached out'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "Government Hospitals",
            y: 5,
           
          },
          {
            name: "Private Hospitals ",
            y: 10.57,

          },
          {
            name: "Isolation Center ",
            y: 7.23,
            
          },
          {
            name: "Community Health Centers ",
            y: 5.58,
           
          },
          {
            name: "Orphanages ",
            y: 4.02,
           
          },
          {
            name: "Others",
            y: 1.92,
            
          }
        ]
      }
    ]
  });



  Highcharts.chart('chart-inst-type', {
    chart: {
      type: 'bar'
    },
    
    
    title: {
      text: `<h5>Relief Impacts </h5> <h2 class="heading-main">by Province</h2>`
    },
    
    xAxis: {
      categories: ['Province 1', 'Province 2', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpashchim'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Relief Bar',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
  
    credits: {
      enabled: false
    },
    series: [{
        name: "",
      data: [20, 15, 8, 10, 12, 28, 30]
    }]
  });