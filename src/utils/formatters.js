export const formatCSVdata = (data) => {

  const firstGraphData = data.slice(1,).map(
    row => ({ x: Number(row[0]), y: Number(row[1]) })
  )

  return firstGraphData;

}

export const formatGraphData = (firstGraphData, secondGraphData) => {

  let dataUm = [];
  let dataDois = [];

  dataUm = firstGraphData;
  dataDois = secondGraphData;

  return {
    options: {
      chart: {
        height: '100%'

      },
      xaxis: {
        type: 'numeric',

      },
      fill: {
        type: 'solid',
      },
      markers: {
        size: [6, 0]
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
      legend: {
        show: false
      },
    },

    series: [
      {
        name: 'Points',
        type: 'scatter',
        data: dataUm,
      },
      {
        name: 'Line',
        type: 'line',
        data: dataDois,
      }
    ]
  }

}
