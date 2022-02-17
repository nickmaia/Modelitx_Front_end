const getSigmoidParams = (data, changeResult) => {

    let data2 = []; //zerando variável
    let chaveY = []; //zerando variável

    data.shift(); //zerando primeiro array [x,y]

    for (let chave of data) {
        //1/(1+EXP(-X))
        chaveY = (1 / (1 + Math.exp(chave.data[0]))).toFixed(2);
        data2.push({ x: Number(chave.data[0]), y: Number(chaveY) });
    }
    const resultado = `1/(1+EXP(-X))`;
    changeResult(resultado)
}
export default getSigmoidParams;