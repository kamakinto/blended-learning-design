/**
 * Created by everettrobinson on 6/11/16.
 */
const charts = {
    radar: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [80, 80, 80, 80, 80, 80, 80]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
  bar: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [0, 0, 0, 0, 0, 0, 0],
          }
      ]
  },
    chartOptions: {

    },

    weights: {
        journal: [10,10,10,10,10,10,10],
        blog:[30,30,30,30,30,30,30],
        discussion_board:[60,60,60,60,60,60,60]
    }



};

export default charts;
