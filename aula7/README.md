Operador módulo %
Ele retorna o resto da operação entre 2 operandos

Se eu utilizar o % no lugar do / teremos o resto da divisão
Ex
3 / 3 = 1 //dá uma bala para cada um, quanto sobra? 0, não sobra nenhuma bala
para outra pessoa, ou seja 3 % 3 = 0

5 % 2 = 1 sobra 1... seria 2 carros e meio para cada pessoa por assim dizer, mas
não dá para partir o carro no meio.

while(num <= 20) {
  num % 2 === 0 ? console.log(num) : '';
  num++;
}

<<<<<<<<<<<<<<<<< ARRAYS Propriedade Length >>>>>>>>>>>>>>>>>
Arrays são objetos desfarçados
Como objetos, eles tem propriedades e métodos
E o array tem também suas propriedades e métodos!

Propriedade length
conta aqtd de itens que tem no array

var arr = ['wilber', null, {bola: 'azul'}, 3, function(){} ];
arr.length// 5 => conta a quantidade de itens no array

com isso podemos juntar algumas coisas

vimos a estrutura do while, utilizamos um número e incrementamos o contador
para que em algum momento ele saia do loop

para iterar sobre este array que criei, eu teria que colocar um
arr[0]
arr[1] e assim por diante

E eu posso utilizar o while por ex para fazer isso
Primeiro preciso saber a quantidade do array

ex
var qtd = arr.length

while(qtd > 0) {
  console.log(arr(qtd--))
}

para imprimir todos os valores:

while(qtd > 0) {
  console.log(arr(--qtd))
}

Posso inclusive verificar se uma das minhas propriedades do array é um objeto, e
pegar esta propriedade.

while(qtd > 0) {
  console.log(arr(--qtd))
  if( qtd === 2 ) {
    console.log(arr[qtd].bola)
  }
}
no momento de renderizar o código, ele irá trazer abaixo do objeto a propriedade
do objeto também!

<<<<<<<<<<<<<<<<<<< Array push e Loop For>>>>>>>>>>>>>>>>>>>
var arr [1, 2, 3, 'Wilber', {bola: 'azul'}, ['la1', 'la2', 'la3']];
arr.length // 5
arr[4].bola //'azul'

Se eu quiser adicionar um item novo no array eu posso alterar ele diretamente e incluir um novo
indice, mas essa nao é a melhor forma de se fazer.

Como o array é um objeto conforme falamos, ele tem suas propriedades, como a length por ex
ele tem o método push! Com ele conseguimos adicionar elementos dentro do array

a tradução de push é empurrar, entao vou empurrar um novo elemento dentro do meu array
utilizando o push.
arr.push(carro: 'BMW');

posso acessar sse indice usando o arr[6]// {carr: 'BMW'}
arr[6].carro // 'BMW'
arr[5][1] //la2

posso adicionar no meu array uma funcao se quiser também
arr.push(function soma(x, y) {return x + y;})
arr[7](1,2) //retorna 3

Posso adicionar outro array caso queira, valor null, etc

<<<<<<<<<<<<<< Estrutura de repetição FOR >>>>>>>>>>>>>>

gera uma estrutura de repeticao mas tem uma sintaxe diferente
o primeiro param é um inicializador, segundo é uma condicional, e o terceiro
é a expressao final. O for funciona como o while, mas td o que vc coloca fora do 
while vc coloca dentro no for

for(var num = 0; num < 20; num++) {
  console.log(num)
}

A diferença é que conseguimos colocar todos nossos parâmetros

Posso inicializar com quantas variáveis eu quiser

for(var num = 2, arroz = 3; num < 5; num++) {
  console.log(num);
  console.log(arroz++);
}