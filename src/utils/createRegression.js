export const linearRegression = (data) => {

    const secondGraphData = data.slice(1,).map(
        row => ({ x: Number(row[0]), y: Number(row[1]) })
    )

    return secondGraphData;

}