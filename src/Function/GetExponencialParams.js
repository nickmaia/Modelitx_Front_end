const getExponencialParams = (data, changeResult) => {

    let data2 = []; //zerando variável
    let chaveY = [];//zerando variável
    let yLinha = [];//zerando variável
    let chaveY = [];//zerando variável
    let yLinha = [];//zerando variável
    let somaX = 0; //zerando variável
    let somaYLinha = 0;//zerando variável
    let multXYlinha = 0;//zerando variável
    let somaxQuadrado = 0;//zerando variável

    data.shift(); //zerando primeiro array [x,y]



    for (let chave of data) {
        somaX += Number(chave.data[0]); //soma de X
        yLinha = Math.log(Number(chave.data[1]));
        somaYLinha += yLinha;
        multXYlinha += (Number(chave.data[0]) * yLinha);
        somaxQuadrado += Number(chave.data[0]) ** 2;
    }
    let mediaX = somaX / n; //Media de X
    let mediaYLinha = somaYLinha / n;
    let a = ((n * multXYlinha) - (somaX * somaYLinha)) / ((n * somaxQuadrado) - (somaX) ** 2);
    let b = Math.exp(mediaYLinha - (a * mediaX));
    for (let chave of data) {
        chaveY = (b * Math.exp(a * Number(chave.data[0]))).toFixed(2);
        data2.push({ x: Number(chave.data[0]), y: Number(chaveY) })
    }

    const resultado = `${b.toFixed(2)}EXP(${a.toFixed(2)}x)`;
    changeResult(resultado)
}
export default getExponencialParams;