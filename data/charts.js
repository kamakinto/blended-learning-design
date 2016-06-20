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
        journal: [30,5,5,35,15,10],
        blog:[35,10,0,35,10,10],
        discussion_board:[35,15,0,35,10,5],
        group_work:[0,35,35,5,20,5],
        post_online_resources:[35,10,10,20,10,15],
        minute_papers:[5,5,20,10,1,40],
        peer_observation_feedback:[5,25,10,10,10,40],
        direct_instruction: [0,15,40,5,25,15],
        in_class_quizzes:[0,0,40,5,10,45]
    }



};

export default charts;
