var options = {
    series: [{
        data: [90]
    }],
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

var tank_level = 90
setInterval(() => {
    if (document.getElementById("motoron").checked && tank_level >= 1) {
        // setInterval(() => {
        //     if (tank_level > 0) {
        tank_level -= 1

        if (tank_level <= 0) {
            tank_level = 0;
            chart.updateSeries([{
                data: [tank_level]
            }])
            alert("Tank Empty")
        }
        chart.updateSeries([{
            data: [tank_level]
        }])
    }
}, 500);

function tankfull() {
    tank_level = 90;
    chart.updateSeries([{
        data: [tank_level]
    }])
}
