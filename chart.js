var chart;
var fruitInfo = [
  { label: "apple",  y: 10  },
  { label: "orange", y: 15  },
  { label: "banana", y: 25  },
  { label: "mango",  y: 30  },
  { label: "grape",  y: 28  }
];

function drawChart() {
	var chartProperties = {
		title:{
			text: "My First Chart in CanvasJS"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: fruitInfo
		}
		]
	};
  chart = new CanvasJS.Chart("chart-id", chartProperties)
  chart.render();
}
//curly brackets = object literal which is unusual
