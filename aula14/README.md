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

Se eu nao usar o valor 0 ele utiliza o primeiro valor do array e o segundo. O primeiro vira o acumulado, e o segundo o atual, no caso o num 1 acumulado, 2 atual

Não é obrigado passar um valor, mas em alguns momentos vai precisar

consigo usar com strings também o reduce

caso eu tenha uma string como por ex essa: ['W', 'i', 'l', 'b', 'e', 'r']
no final ele tem que trazer meu nome concatenado //Wilber

Ele faz basicamente o que o join faz. Mas o join se eu usar números ele vai concatenar, vai juntar eles
O every e o some fazem algo parecido com o reduce também, mas ele retornam true ou false, e pode ser que
eles não passem por todos os itens do array, já o reduce vai passar por todos

<<<<<<<<<<<<<<<<< método reduceRight >>>>>>>>>>>>>>>>>