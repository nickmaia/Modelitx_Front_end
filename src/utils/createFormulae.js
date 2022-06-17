export let createLinearFormulae = (a, b) => {
  if(b>0){
    b = '+'+b;
  }
  return `f(x)= ${a}x${b}`;
}

export let createExponencialFormulae = (a, b) => {
  return `f(x)= ${a} e^{(${b}x)}`;
}

export let createSigmoidFormulae = (a, b, c, d) => {
  return `f(x)= \\frac{${a}}{1+e^{(-x${-b}/${c})^{${d}}}}`;
}


export let createNormalFormulae = (a, b, c) => {
  return `f(x)= ${a} e^{\\frac{-x+${(b ** 2)}}{${2 * (c ** 2)}}}`;
}