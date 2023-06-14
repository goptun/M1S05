/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

var color = "cian";

var corTraduzida;

switch (color) {
  case "red":
    corTraduzida = "Vermelho";
    break;
  case "blue":
    corTraduzida = "Azul";
    break;
  case "green":
    corTraduzida = "Verde";
    break;
  case "yellow":
    corTraduzida = "Amarelo";
    break;
  case "black":
    corTraduzida = "Preto";
    break;
  case "white":
    corTraduzida = "Branco";
    break;
  default:
    corTraduzida = "Não sei";
    break;
}

console.log("Tradução: " + corTraduzida);
