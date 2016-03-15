$(document).ready(function() {
    function chart1() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f2f6ff',
            margin: [0, 0, 30, 0]
        };
        var title = {
            text: '牌照方系统接入比例',
            verticalAlign: 'bottom',
            style: { color: '#06318f', fontSize: '14px', fontWeight: 600 }
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#fe0002', '#f79499'],
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        };
        var series = [{
            type: 'pie',
            name: '牌照方',
            data: [
                ['100家牌照方已接入35家', 35.0],


                ["100家牌照未接入", 65.0]
            ]
        }];
        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#container').highcharts(json);
    };

    function chart2() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f2f6ff',
            margin: [0, 0, 30, 0]
        };
        var title = {
            text: '直播信源接入比例',
            verticalAlign: 'bottom',
            style: { color: '#06318f', fontSize: '14px', fontWeight: 600 }
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#ffc102', '#f8e19b'],
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        };
        var series = [{
            type: 'pie',
            name: '直播信源',
            data: [
                ['直播信源500路', 70.0],


                ['非直播信源500路', 30.0]
            ]
        }];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#container1').highcharts(json);
    };

    function chart3() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f2f6ff',
            margin: [0, 0, 30, 0]
        };
        var title = {
            text: '直播编码能力比例',
            verticalAlign: 'bottom',
            style: { color: '#06318f', fontSize: '14px', fontWeight: 600 },
            margin: '30px'
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#7bc145', '#c2e1b5'],
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        };
        var series = [{
            type: 'pie',
            name: '直播编码',
            data: [
                ['直播编码500路', 40.0],


                ['非直播编码500路', 60.0]
            ]
        }];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#container2').highcharts(json);
    };



    function chart4() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f2f6ff',
            margin: [0, 0, 30, 0]
        };
        var title = {
            text: '直播分发能力比例',
            verticalAlign: 'bottom',
            style: { color: '#06318f', fontSize: '14px', fontWeight: 600 }
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#3c7acf', '#a9c5ec'],
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        };
        var series = [{
            type: 'pie',
            name: '直播分发',
            data: [
                ['直播分发能力500路', 25.0],

                ['非直播分发能力500路', 75.0]
            ]
        }];
        var json = {};
            json.chart = chart;
            json.title = title;
            json.tooltip = tooltip;
            json.series = series;
            json.plotOptions = plotOptions;
        // console.log(json);
        $('#container3').highcharts(json);
    };

    function chart5() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f2f6ff',
            margin: [0, 0, 30, 0]
        };
        var title = {
            text: '100T存储空间使用率',
            verticalAlign: 'bottom',
            style: { color: '#06318f', fontSize: '14px', fontWeight: 600 }
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#ed6d00', '#f0c098'],
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        };
        var series = [{
            type: 'pie',
            name: '空间',
            data: [{
                    name: '100T存储空间使用率',
                    y: 35.0,
                    sliced: true,
                    selected: true


                },

                ['100T存储空间未使用', 65.0]
            ]
        }];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#container5').highcharts(json);
    };


    chart1();
    chart2();
    chart3();
    chart4();
    chart5();
});
