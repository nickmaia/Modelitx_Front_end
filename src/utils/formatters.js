export const formatCSVdata = (data) => {

  const tidyingUpGraphData = data.slice(1,).map(
    row => ({ x: Number(row[0]), y: Number(row[1]) })
  )

  return tidyingUpGraphData;

}

export const formatGraphData = (tidyingUpGraphData) => {

  let dataUm = [];
  let dataDois = [];

  dataUm = tidyingUpGraphData;

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
