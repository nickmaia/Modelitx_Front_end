export const linearRegression = (firstGraphData, a, b) => {

    const secondGraphData =
        firstGraphData.map(
            row => ({ x: (row.x), y: (row.y) })
        )

    return secondGraphData;

}