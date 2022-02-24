export const createLinearModel = (firstGraphData) => {

  //Calculando b
  let bLinear = 1;

  //Calculando a
  let aLinear = 1;

  return (
    { a: aLinear, b: bLinear }
  );
}

export const createExponencialModel = (data) => {

  return (
    { b: 10, a: 12 }
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