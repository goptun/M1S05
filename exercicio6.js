/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let produtos = ["Arroz", "Feijão", "Carne", "Verduras", "Frutas"];
let precos = [2.99, 3.99, 15.0, 2.5, 1.99];
let totalProdutos = 0;
let totalValor = 0;

for (let i = 0; i < produtos.length; i++) {
  console.log(`${produtos[i]} - ${precos[i]}`);
  totalProdutos++;
  totalValor += precos[i];
}

console.log(`Total de produtos: ${totalProdutos}`);
console.log(`Valor total: ${totalValor}`);
