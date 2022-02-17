export const createLinearModel = (data) => {

  let xData = data.slice(1,).map(row => (Number(row[0]))) //xData em array [1,2,3,4]
  let yData = data.slice(1,).map(row => (Number(row[1])))

  let lodash = require('lodash'); //soma
  let sumX = lodash.sum(xData);
  let sumY = lodash.sum(yData);

  let n = Object.keys(data).length - 1; //Numeros de elementos
  let mediaX = sumX / n; //Media 
  let mediaY = sumY / n;

  let Sxy = data.slice(1,).map(row => ((Number(row[0]) - mediaX) * (Number(row[1])))); //Sxy em array [1,2,3,4]
  let Sxx = data.slice(1,).map(row => ((Number(row[0]) - mediaX) ** 2));

  let sumSxx = lodash.sum(Sxx); //soma
  let sumSxy = lodash.sum(Sxy);

  let bLinear = sumSxy / sumSxx; //Calculo final de b
  let aLinear = mediaY - (bLinear * mediaX); //Calculando a

  return (
    { a: aLinear, b: bLinear }
  );
}