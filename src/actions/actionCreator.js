

export function updateRadar(charts) {
    
    return {
        type: 'UPDATE_RADAR',
        charts
    }
}

export function addChartValues(boxValue) {
 console.log("inside update chart value action:" + boxValue)




    return {
        type: 'ADD_CHART_VALUE',
        boxValue
    }
}


