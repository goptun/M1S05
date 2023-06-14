/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

var numero = 4;
var divisores = 0;
var i = 1;

do {
  if (numero % i == 0) {
    divisores++;
  }
  i++;
} while (i <= numero);

if (divisores == 2) {
  console.log("O número " + numero + " é primo.");
} else {
  console.log("O número " + numero + " não é primo.");
}
