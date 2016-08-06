var chart;
/* var fruitInfo = [
  { label: "apple",  y: 10  },
  { label: "orange", y: 15  },
  { label: "banana", y: 25  },
  { label: "mango",  y: 30  },
  { label: "grape",  y: 28  }
]; */

function drawChart() {

      chart = new CanvasJS.Chart("chart-id",
      {
        data: [
        {
          type: "column",
          dataPoints: newArr
        }
        ]
      })
  	chart.render()
  }
//curly brackets = object literal which is unusual
