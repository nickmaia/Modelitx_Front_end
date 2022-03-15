export let createLinearFormulae = (a, b) => {
  return `f(x)= ${a.toFixed(2)}x+${b.toFixed(2)}`;
}

export let createExponencialFormulae = (a, b) => {
  return `f(x)= ${a.toFixed(2)}exp^{(${b.toFixed(2)}X)}`;
}

export let createSigmoidFormulae = (a, b, c, d) => {
  return `f(x)=${a.toFixed(2)}/1+e^{(-x${-b.toFixed(2)}/${c.toFixed(2)})^{${d.toFixed(2)}}}`;
}

export let createNormalFormulae = (a, b, c) => {
  return `f(x)=${a.toFixed(2)}e^{(-x+${(b ** 2).toFixed(2)}) / (${(2 * (c ** 2)).toFixed(2)})}`;
}