const GetLinearParams = ({ data, changeResult, changeData }) => {

  console.log("Data GetLinearParams", data)

  let data1 = []; //zerando variável
  let data2 = []; //zerando variável
  let somaX = 0; //zerando variável
  let somaY = 0; //zerando variável
  let Sxy = 0; //zerando variável
  let Sxx = 0; //zerando variável
  let chaveY = [];//zerando variável

  data.shift(); //zerando primeiro array [x,y]

  for (let chave of data) {
    data1.push({ x: Number(chave.data[0]), y: Number(chave.data[1]) }); //Pontos do data1
    somaX += Number(chave.data[0]); //soma de X
    somaY += Number(chave.data[1]); //soma de y
  }
  let n = Object.keys(data).length; // Números de elementos
  let mediaX = somaX / n; //Media de X
  let mediaY = somaY / n; //Media de Y

  for (let chave of data) { //Calculando b
    Sxy += (Number(chave.data[0]) - mediaX) * (Number(chave.data[1]));
    Sxx += (Number(chave.data[0]) - mediaX) ** 2;
  }
  let b = Sxy / Sxx; //Calculo final de b
  let a = mediaY - (b * mediaX); //Calculando a

  for (let chave of data) {
    chaveY = (a + b * (Number(chave.data[0]))).toFixed(2); //Y calculado para a regressão linear Y = a + (b*Xi) com duas casas decimais.
    data2.push({ x: Number(chave.data[0]), y: Number(chaveY) }) // Atribuindo os valores dentro da variavel data2
  }

  const resultado = `${a.toFixed(2)}+${b.toFixed(2)}x`; //Calculando a e b com até duas casas decimais para aparecer na formula
  changeResult(resultado) //Atualizando a formula

  const graphData = {
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

    series: [{
      name: 'Points',
      type: 'scatter',
      data: data1
    }, {
      name: 'Line',
      type: 'line',
      data: data2.sort(function (p, r) { return p.x - r.x; }),
    }],
  }
  changeData(graphData)
}

export default GetLinearParams;