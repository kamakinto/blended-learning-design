

export function updateRadar(charts) {
    
    return {
        type: 'UPDATE_RADAR',
        charts
    }
}

export function updateChartValues(boxValue, props) {

 console.log("inside update chart value action:" + boxValue)
    //switch case to determine the value of checkbox
    //in each switch case, apply the value of the array to a param to pass in as an action
    switch(boxValue.value) {

        case 'blogs' :
            var weight = props.charts.weights.blog;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'blog';

            if(boxValue.checked){
                weight = addWeight(weight, chartData);
            } else {
                weight = removeWeight(weight, chartData);
            }

            return {
                type: 'UPDATE_WEIGHT',
                weight,
                chartType
            }

        case 'journal' :
            var weight = props.charts.weights.journal;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'journal';
            if(boxValue.checked){
                weight = addWeight(weight, chartData);
            } else {
                weight = removeWeight(weight, chartData);
            }
            return {
                type: 'UPDATE_WEIGHT',
                weight,
                chartType
            }

        case 'discussion board' :
            var weight = props.charts.weights.discussion_board;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'discussion_board';

            if(boxValue.checked){
                weight = addWeight(weight, chartData);
            } else {
                weight = removeWeight(weight, chartData);
            }
            return {
                type: 'UPDATE_WEIGHT',
                weight,
                chartType
            }
        default :

            return {
                type: 'ADD_CHART_VALUE',
                boxValue
            }

    }


}
/**
 * Helper Functions
 * @param weight
 * @param chart
 * @returns {*}
 */

function addWeight(weight, chart) {

    for (var i=0; i < chart.length; i++)
    {
        chart[i] += weight[i];
    }

    return chart;

}

function removeWeight(weight, chart) {

    for (var i=0; i < chart.length; i++)
    {
        chart[i] -= weight[i];
    }

    return chart;

}