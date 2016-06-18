/**
 * Created by everettrobinson on 6/11/16.
 */
const charts = {
    radar: {
        labels: ["Asynchronous", "Collaboration", "Face to Face", "Deep Reflection", "Duration", "Assessment"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [80, 80, 80, 80, 80, 80]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [0, 0, 0, 0, 0, 0 ]
            }
        ]
    },
  bar: {
      labels: ["Asynchronous", "Collaboration", "Face to Face", "Deep Reflection", "Duration", "Assessment"],
      datasets: [
          {
              label: "My First dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [0, 0, 0, 0, 0, 0],
          }
      ]
  },
    chartOptions: {
        options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 10,
                    stepSize: 5
                }
            }]

        }
    }

    },

    weights: {
        journal: [10,10,10,10,10,10],
        blog:[30,30,30,30,30,30],
        discussion_board:[60,60,60,60,60,60],
        group_work:[60,60,60,60,60,60],
        post_online_resources:[5,25,30,12,4,20],
        minute_papers:[6,34,44,26,6,10],
        peer_observation_feedback:[20,2,40,17,33,5],
        direct_instruction: [66,42,31,34,9,26],
        in_class_quizzes:[40,19,28,23,19,6]
    }



};

export default charts;
