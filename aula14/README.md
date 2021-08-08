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
O reduceRight faz a mesma coisa do reduce, mas da direita pra esquerda

Se eu usar por ex o array com meu nome, ele irá inverter meu nome, parecido com o reverse
Se estivermos utilizando números também irá fazer o cálculo ao contrário

<<<<<<<<<<< método indexOf() >>>>>>>>>>>
O indexOf procura se o valor existe no array
Ex
var arr = [1, 2, 3, 4, 5]
console.log(arr.indexOf(3)); //2

Ele encontrou o número 3 no array, e ele retorna a posição do índice, a posição exata dele no índice do array
como vemos, o 3 está na posição 2 do array

Se o índice não existir ele retorna -1
Ex
console.log(arr.indexOf(6)) // -1

Em um exemplo de array com strings, vai ser a mesma coisa, se não existir vai retornar -1, e se existir vai
retornar a posição do array da string

O indexOf tem um segundo parâmetro que podemos passar, que é exatamente onde o indexOf deve iniciar a busca

var arr = ['W', 'i', 'l', 'b', 'e', 'r']
Ex console.log(arr.indexOf('i', 2)) // -1

O segundo parâmetro você usa só se quiser procurar a partir de determinado ponto

Posso fazer uma comparacao também para retornar true
console.log(arr.indexOf('i') > -1) //true
console.log(arr.indexOf('i') === -1) //false
aqui conseguimos saber se o item existe ou não.. se for true ele existe, senao false
Se ele for maior ou igual a zero ele existe, então retorna true, senão retorna false 

<<<<<<<<<<<<<<<<<<<< metodo lastIndexOf() >>>>>>>>>>>>>>>>>>>>
Ele faz a mesma coisa que o indexOf, só que ele se inicia pelo final

var arr = ['W', 'i', 'l', 'b', 'e', 'r'];
Ex console.log(arr.lastIndexOf('b', 2)) // -1
Retornou false pq ele começou a contar a partir do indice 2 até o zero, entao ele nao encontra a letra B

se eu colocasse o numero 3 ele encontraria.

E se eu nao usar um segundo parametro, ele vai encontrar o indice retornando a letra
console.log(arr.lastIndexOf('b')) // 3

<<<<<<<<<<<<<<< metodo isArray() >>>>>>>>>>>>>>>
Serve pra verificar se o array existe ou nao! 
Ex:
var arr = ['W', 'i', 'l', 'b', 'e', 'r'];
console.log(Array.isArray(arr)); //true

Se eu usar um typeOf por ex, ele só vai retornar que é um objeto
console.log(typeof arr)); //object

console.log(typeof arr === 'array'); //false

se eu usar o typeof não consigo fazer essa verificação pq ele vai retornar objeto tanto para
object quanto para array. Com o typeof consigo verificar se é uma string, boolean, function, number ou até um objeto,
mas para arrays não funciona.