/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(num1, num2, operacao) {
  return operacao(num1, num2);
}

function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

console.log(calculadora(2, 3, adicao));
console.log(calculadora(2, 3, subtracao));
console.log(calculadora(2, 3, multiplicacao));
console.log(calculadora(2, 3, divisao));
