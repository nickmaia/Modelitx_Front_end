import axios from "axios";

export let createLinearModel = async (firstDataSerie) => {

  const x = Object.values(firstDataSerie).map(row => Number(row.x));
  const y = Object.values(firstDataSerie).map(row => Number(row.y));

 
  try {
    const response = await axios.post(
      "https://modelitx.herokuapp.com/api/linear", {
        x,
        y
      }
    )

    const {
      a: aLinear,
      b: bLinear,
      x_array,
      y_array
    } = await response.data;

    return ({
      a: aLinear,
      b: bLinear,
      xArray: x_array,
      yArray: y_array
    });
  } catch (err) {
    console.error(err);
  }
}

export let createExponencialModel = async (firstDataSerie) => {

  const x = Object.values(firstDataSerie).map(row => Number(row.x));
  const y = Object.values(firstDataSerie).map(row => Number(row.y));

  const response = await axios.post(
    "http://127.0.0.1:8000/api/exponencial", {
      x,
      y
    }
  )

  const {
    a: aExponencial,
    b: bExponencial,
    x_array,
    y_array
  } = await response.data;

  return ({
    a: aExponencial,
    b: bExponencial,
    xArray: x_array,
    yArray: y_array
  });
}

export let createSigmoidModel = async (firstDataSerie) => {
  const x = Object.values(firstDataSerie).map(row => Number(row.x));
  const y = Object.values(firstDataSerie).map(row => Number(row.y));

  const response = await axios.post(
    "https://modelitx.herokuapp.com/api/sigmoid", {
      x,
      y
    }
  )

  const {
    a: aSigmoid,
    b: bSigmoid,
    c: cSigmoid,
    d: dSigmoid,
    x_array,
    y_array
  } = await response.data;

  return ({
    a: aSigmoid,
    b: bSigmoid,
    c: cSigmoid,
    d: dSigmoid,
    xArray: x_array,
    yArray: y_array
  });
}

export let createNormalModel = async (firstDataSerie) => {
  const x = Object.values(firstDataSerie).map(row => Number(row.x));
  const y = Object.values(firstDataSerie).map(row => Number(row.y));

  const response = await axios.post(
    "https://modelitx.herokuapp.com/api/normal", {
      x,
      y
    }
  )

  const {
    a: aNormal,
    b: bNormal,
    c: cNormal,
    x_array,
    y_array
  } = await response.data;

  return ({
    a: aNormal,
    b: bNormal,
    c: cNormal,
    xArray: x_array,
    yArray: y_array
  });
}