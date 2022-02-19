export const createLinearModel = (data) => {
  let xData = data.map(row => (Number(row.x)));
  console.log(xData);

  return (
    { a: 1, b: 1 }
  );
}

export const createExponencialModel = (data) => {
  const lodash = require('lodash');

  //xData em array [1,2,3,4]
  let xData = data.slice(1,).map(
    row => (Number(row[0]))
  );

  let yLinha = data.slice(1,).map(
    row => (Math.log(Number(row[1])))
  );

  let i = 0;
  let multXYlinha = data.slice(1,).map(
    row => (Number(row[0]) * yLinha[i++])
  );

  let xQuadrado = data.slice(1,).map(
    row => ((Number(row[0])) ** 2)
  );

  //soma
  let somaX = lodash.sum(xData);
  let somaYLinha = lodash.sum(yLinha);
  let somaMultXYlinha = lodash.sum(multXYlinha);
  let somaxQuadrado = lodash.sum(xQuadrado);

  //Media
  let mediaX = lodash.mean(xData) //Media de X
  let mediaYLinha = lodash.mean(yLinha)

  //Numeros de elementos
  let n = Object.keys(data).length - 1;

  //Calculando a
  let aExponencial =
    ((n * somaMultXYlinha) - (somaX * somaYLinha)) / ((n * somaxQuadrado) - (somaX) ** 2);

  //Calculando b
  let bExponencial = Math.exp(mediaYLinha - (aExponencial * mediaX));
  return (
    { b: bExponencial, a: aExponencial }
  );
}

export const createSigmoidModel = (data) => {
  let aSigmoid = 5;
  let bSigmoid = 9;
  return (
    { a: aSigmoid, b: bSigmoid }
  );
}

export const createNormalModel = (data) => {
  return (
    { a: 1, b: 1 }
  );
}