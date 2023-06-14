/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

var numero = 999;
var numeroAnterior = 0;
var numeroAtual = 1;
var auxiliar;

while (numeroAtual <= numero) {
  console.log(numeroAtual);
  auxiliar = numeroAtual;
  numeroAtual = numeroAnterior + numeroAtual;
  numeroAnterior = auxiliar;
}
