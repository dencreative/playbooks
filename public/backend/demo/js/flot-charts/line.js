'use strict';

$(document).ready(function(){

    // Chart Data
    var lineChartData = [
        {
            label: 'Entries submitted in the past week',
            data: [[1,600], [2,300], [3,500], [4,1000], [5,100], [6,900], [7,850]],
            color: '#ffc721'
        }
        // {
        //     label: 'Submitted entry',
        //     data: [[1,200], [2,60], [3,415], [4,1300], [5,87], [6,400], [7,800]],
        //     color: '#252525'
        // }
    ];

    // Chart Options
    var lineChartOptions = {
        series: {
            lines: {
                show: true,
                barWidth: 0.05,
                fill: 0
            }
        },
        shadowSize: 0.1,
        grid : {
            borderWidth: 1,
            borderColor: '#edf9fc',
            show : true,
            hoverable : true,
            clickable : true
        },

        yaxis: {
            tickColor: '#edf9fc',
            tickDecimals: 0,
            font :{
                lineHeight: 13,
                style: 'normal',
                color: '#9f9f9f',
            },
            shadowSize: 0
        },

        xaxis: {
            tickColor: '#fff',
            tickDecimals: 0,
            font :{
                lineHeight: 13,
                style: 'normal',
                color: '#9f9f9f'
            },
            shadowSize: 0,
            ticks: [[1, 'May 8th'], [2, 'May 9th'], [3, 'May 10th'], [4, 'May 11th'], [5, 'May 12th'], [6, 'May 13th'], [7, 'May 14th']]
        },
        legend:{
            container: '.flot-chart-legends--line',
            backgroundOpacity: 0.5,
            noColumns: 0,
            backgroundColor: '#fff',
            lineWidth: 0,
            labelBoxBorderColor: '#fff'
        }
    };

    // Create chart
    if ($('.flot-line')[0]) {
        $.plot($('.flot-line'), lineChartData, lineChartOptions);
    }
});

'use strict';

$(document).ready(function() {

    // Tooltips for Flot Charts
    if ($('.flot-chart')[0]) {
        $('.flot-chart').bind('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1];
                $('.flot-tooltip').html(y + '   Entries').css({top: item.pageY+5, left: item.pageX+5}).show();
            }
            else {
                $('.flot-tooltip').hide();
            }
        });

        $('<div class="flot-tooltip"></div>').appendTo('body');
    }
});