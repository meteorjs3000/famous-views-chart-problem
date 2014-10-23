Template.chart.rendered = function() {
    var tpl = this
    Meteor.setTimeout( function() {
        initializeChart(tpl)
    }, 0)
}

var initializeChart = function(tpl) {

    var dataSeries = [9,8,7,6,5,4,3,2,1,0]

    tpl.$('#chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Power Consumption'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Power (kW)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            showInLegend: false,
            data: dataSeries

        }],
		credits: {
			enabled: false
		}
    });

}