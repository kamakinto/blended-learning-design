

export function updateRadar(charts) {
    
    return {
        type: 'UPDATE_RADAR',
        charts
    }
}

export function updateChartValues(boxValue, props) {
    
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

        case 'Group Work' :
            var weight = props.charts.weights.group_work;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'group_work';

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
        case 'Post Online Resources' :
            var weight = props.charts.weights.post_online_resources;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'post_online_resources';

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
        case 'minute papers' :
            var weight = props.charts.weights.minute_papers;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'minute_papers';

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
        case 'peer observation feedback' :
            var weight = props.charts.weights.peer_observation_feedback;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'peer_observation_feedback';

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
        case 'in class quizzes' :
            var weight = props.charts.weights.in_class_quizzes;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'in_class_quizzes';

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
        
        case 'direct instruction' :
            var weight = props.charts.weights.direct_instruction;
            var chartData = props.charts.radar.datasets[1].data;
            var chartType = 'direct_instruction';

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