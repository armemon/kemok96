async function getFirebaseDataon() {
    await firebase.database().ref('Tank_Data').on('value', function(data) { //for every object each time it is run
        tank_level = data.val()['Level']
        console.log(tank_level)


        chart.updateSeries([{
            data: [tank_level]
        }])
    })
}
getFirebaseDataon()

var options = {
    series: [],
    noData: {
        align: 'center',
        verticalAlign: 'top',
        text: 'Loading...'
    },
    chart: {
        type: 'bar',
        height: 120,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }

    },
    dataLabels: {
        enabled: true
    },
    fill: {
        colors: ['#6FD8E2', '#F44336', '#E91E63', '#9C27B0']
    },
    yaxis: {
        min: 0,
        max: 100,
        labels: {
            style: {
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        categories: ['Water Level'],
    },
};

var chart = new ApexCharts(document.querySelector("#waterLevelChart"), options);
chart.render();