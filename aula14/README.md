Array Reduce

Pelo nome já vemos que ele reduz o array

var arr = [1, 2, 3, 4, 5, 6];

O reduce também não modifica o array principal. Passamos dois parâmetros para ele,
uma função de redução, e o segundo parâmetro que é o valor inicial.

var reduce = arr.reduce(function(acumulado, atual, index, array){
  return acumulado + atual;
}, 0);

console.log(reduce) //15

A diferença dos outros parametros da funcao que o map e reduce recebem, no reduce
o primeiro parametro é o acumulado, e o segundo é o valor atual, depois o índice e por ultimo
o próprio array

Nessa funcao reduce o valor deu 15

A primeira vez que entra na funcao, não existe valor acumlado, e o valor que passamos na funcao é o zero.

Primeira entrada: 0 + 1 = 1
segunda entrada: 1 + 2 = 3
terceira entrada: 3 + 3 = 6
quarta entrada: 6 + 4 = 10
quinta entrada: 10 + 5 = 15