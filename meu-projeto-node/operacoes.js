var adicao = (a,b) => {
  return a + b;
}

var subtracao = (a,b) => {
  return a - b;
}
var multiplicacao = (a,b) => {
  return a * b;
}
var divisao = (a,b) => {
  if (b == 0) {
    return "Erro: divisão por zero!";
  }
  else {
    return a / b;
  }

}

module.exports = {adicao, subtracao, multiplicacao, divisao};