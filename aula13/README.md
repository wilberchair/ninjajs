<<<<<<<<<<<<<<<< toString() >>>>>>>>>>>>>>>>

Em javascript arrays são objetos, não existem arrays de verdade, eles são objetos desfarçados
conseguimos utilizar eles como objetos numeráveis

var arr = [1, 2, 3]

se eu pegar o primeiro indice assim arr[0] //1

E como os arrrays são objetos, eles tem propriedades e métodos

arr.length //3
arr.push(4) // inclui mais um item no array [1, 2, 3, 4]

E temos o toString()
É uma funcao ou método que vai converter nosso objeto para uma string

var obj = {a: 1, b: 2, c: 3}
obj.toString() // '[object Object]' ele converte da forma que acha mais conveniente no objeto

arr.toString() // '1,2,3,4' converte o array para string e separa por uma vírgula, exatamente como o join, e não modifica o array principal, a unica diferença é que no join consigo passar um separador como parâmetro

O toString tem uma implementação diferente em cada tipo de objeto, vamos ver isso mais para frente

<<<<<<<<<<<<<< método concat() >>>>>>>>>>>>>>
concat vai concatenar
O concat faz mais ou menos o que o método push faz
arr.concat(5) // [1, 2, 3, 4, 5]
Ele une o array com algo, ele nao modifica o array principal
gera um novo array com os novos valores, já o push modifica o array principal

o que posso fazer com o concat? Posso unir um novo array por ex
arr.concat([6,7,8,9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.concat([6,7,8,9], [10, 11, 12]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr //[1, 2, 3, 4]

<<<<<<<<<<<< método unshift() >>>>>>>>>>>>
Se eu der um arr.push() ele irá modificar o array adicionando um novo item

arr.push(5) // [1, 2, 3, 4, 5]
arr.length //5

O unshift() irá adicionar um novo item no array só que no início do array

arr.unshift(0) // [0, 1, 2, 3, 4, 5]

<<<<<<<<<<<<<<<<< medoto shift() >>>>>>>>>>>>>>>>>
remove o primeiro item do array

arr.shift() // [1, 2, 3, 4, 5]

<<<<<<<<<<<<<<<<<<<<< metodo slice() >>>>>>>>>>>>>>>>>>>>>
O slice retorna um pedaço do array que a gente seleciona
Ele nao altera o array, retorna um novo array
arr // [1, 2, 3, 4, 5]

O slice tem 2 parametros, o primeiro é o índice de onde vou começar
ar.slice(1) //[2, 3, 4, 5]
ar.slice(0)) //[1, 2, 3, 4, 5]
O segundo parametro é ate onde eu quero que o slice vá
Ele vai até o segundo índice mas sem mostrar ele
ar.slice(0, 2)) //[1, 2]

ar.slice(1, 4)) //[2, 3, 4]

Consigo usar também valores negativos
arr.slice(-2) //[4, 5]
Basicamente o que ele faz é olhar para o arr.length // 5 e 5 - 2 = 3
Ele identifica o 3 item do array e conta a partir daí

<<<<<<<<<<<<< metodo splice() >>>>>>>>>>>>>
O Splice modifica o array principal! ele pode tanto adicionar com remover itens do array

arr.splice()
O primeiro parametro vai especificar o indice onde deve ocorrer a remocão ou adicao dos indices do array

arr.splice(3) //[4, 5]
Esses foram removidos do array principal, agora o array só tem 3 indices
arr // [1, 2, 3]

Se eu usar apenas um parâmetro é isso que ele vai fazer

O segundo parametro e´ a quantidade de itens que vou remover

agora se eu quiser determinar de onde começo a remover uso os dois parametros

arr.splice(1, 3) // [2, 2, 4]
arr //[1, 5]

Agora se eu quiser adicionar
o 1 é a partir do primeiro indice que quero que comece
0 é que nao quero remover nenhum
e o terceiro parametro é o que eu vou adicionar no array
arr.splice(1, 0, 'a')
arr //[1, 'a', 5]

o 5 é o indice 2 e eu quero que adicione as letra b c e d a partir dali
arr.splice(2, 0, 'b', 'c', 'd')
arr // [1, 'a', 'b', 'c', 'd', 5]

agora se eu quiser remover essas letras que coloquei e trazer os números de volta

a partir do 1 indice, ele remove 4, e acrescenta 2 e 3
arr.splice(1, 4, 2, 3) // [1, 2, 3, 4, 5]

<<<<<<<<<<<<<< metodo forEach() >>>>>>>>>>>>>>
forEach é uma estrutura de repeticao, parecido com o for,
mas funciona de uma forma mais elegante
posso usar 3 parametros, 
item do array
indice do array
o proprio array

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function(item, index, array){
  console.log(item, index, array);
})

resposta do console
1 0 [1, 2, 3, 4, 5, 6, 7]
2 1 [1, 2, 3, 4, 5, 6, 7]
3 2 [1, 2, 3, 4, 5, 6, 7]
4 3 [1, 2, 3, 4, 5, 6, 7]
5 4 [1, 2, 3, 4, 5, 6, 7]
6 5 [1, 2, 3, 4, 5, 6, 7]
7 6 [1, 2, 3, 4, 5, 6, 7]

mais simples do que usar um for
se fosse fazer com um for:

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i], i, arr);
}

O forEach é mais rápido que o for

se eu nao quiser saber o indice ou o array posso usar apenas o item

Só passo os parametros que quero usar que o js irá ignorar

var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
arr.forEach(function(item){
  sum += item;
})

console.log(sum) //28

<<<<<<<<<<<<<<<<<<< método Every() >>>>>>>>>>>>>>>>>>>
Ele é o predicado do Array
Ele vai aplicar uma funcao e o retorno dela,
que vai ser baseado no retorno da funcao que passar pro parametro,
vai ser true ou false

var arr = [1, 2, 3, 4, 5, 6, 7];

var every = arr.every(function(item) {
  console.log(item);
  return item < 5;
})

console.log(every) // false
retornou false pq nem todos itens são menores do que 5, para retornar true todos deveriam ser menores do que 5.

var every2 = arr.every(function(item) {
  return item < 8;
})

console.log(every2) //true

basicamente, vamos usar o every para testar itens do array para verificar se sao divisíveis por dois, se são pares, se sao maiores que algum número, para verificar se é true ou false

<<<<<<<<<<<<<<< metodo some() >>>>>>>>>>>>>>>
Ele faz o que o método every faz, só que para alguns elementos. Ou seja, se ao menos algum dos elementos do array for true, ele vai retornar true!

var arr = [1, 2, 3, 4, 5, 6, 7];

var some = arr.some(function(item) {
  console.log(item);
  return item < 5;
})

console.log(some) // true