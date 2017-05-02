/**
Template Name: Adminto Dashboard
Author: CoderThemes
Email: coderthemes@gmail.com
File: Chartjs
*/


!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
               
                case 'Doughnut':
                    new Chart(ctx, {type: 'doughnut', data: data, options: options});
                    break;
                case 'Pie':
                    new Chart(ctx, {type: 'pie', data: data, options: options});
                    break;
                
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        
        

        //donut chart
        var donutChart = {
            labels: [
                "Report",
                "Policy Brief",
                "Technical Review",
                "Perdes",
                "Leaflet"
            ],
            datasets: [
                {
                    data: [300, 50, 100,20,40],
                    backgroundColor: [
                        "#188ae2",
                        "#10c469",
                        "#f9c851",
                        "#168844",
                        "#e90487"
                    ],
                    hoverBackgroundColor: [
                        "#188ae2",
                        "#10c469",
                        "#f9c851",
                        "#168844",
                        "#e90487"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };
        this.respChart($("#doughnut"),'Doughnut',donutChart);


        //Pie chart
        var pieChart = {
            labels: [
                "Natural Resource Management",
                "Renewable Energy",
                "Sustainable Agriculture"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#ff8acc",
                        "#5b69bc",
                        "#f9c851"
                    ],
                    hoverBackgroundColor: [
                        "#ff8acc",
                        "#5b69bc",
                        "#f9c851"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };
        this.respChart($("#pie"),'Pie',pieChart);


       


       

        
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);
