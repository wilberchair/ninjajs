Truthy e Falsy
O if precisa de um valor booleano para verificar uma condição
o Thruthy é todo valor que quando convertido para booleano é true
o Falsy é todo valor que quando convertido para booleano é false

um exemplo, podemos criar um if verificando se o 1 é true ou false

var teste
if(1) {teste = true} else {teste = false} //true
já com zero ele vai retornar false
if(0) {teste = true} else {teste = false} //false

Valores Falsy
undefined, 0, null, NaN, -0, '', "", false

if('') {teste = true} else {teste = false} //false
if('0') {teste = true} else {teste = false} //true

Valores truthy
Todos os outros

Descobrir a representação booleana sem utilizar o if
Utilizar !!

Ele converte duas vezes

Essa conversao o js já faz automaticamente, dificilmente precisará usar

Condicional ternário
Condição ? true : false;

Ele cria uma forma mais fácil de criar um if

Ex: 1 === 2 ? true : false //false

<<<<<<<<<<<<<<<<<<< ESCOPO DE VARIAVEIS >>>>>>>>>>>>>>>>>>>
Temos o escopo global e local

O escopo é o local onde vc declara as variáveis

Sempre que eu declaro uma variável fora de uma função, ela está no escopo global, e se for dentro de uma função será local

Isso gera alguns problemas no js
Por isso é importante declarar variaveis dentro de um escopo local

 Ex
 var myvar = 1

 function myfunction() {
   return myvar;
 }

 myfunction(); //1

 Sempre que crio uma var global consigo acessar ela no escopo local

 function otherFunction() {
   var otherVar = true;
   return otherVar;
 }

 otherFunction() //true

 Essa variável mostrou o valor pq está disponível em seu escopo ao executar a funcao, mas se eu chamar essa variável no escopo global,
 irá gerar um erro de otherVar is not defined, ou seja, nao existe fora da função.

 Outra vantagem é que o JS tem o garbage collector, limpa da memória o espaço que a variável está ocupando quando ela nao está sendo usada. Quando crio uma variável ela ocupa um espaço na memória pra guardar seu valor, e quando crio numa funcao, ela só é utilizada no momento que utilizo a função, isso é bom pq nao guardamos lixo na memória!

 Sempre usar var pra declarar as variáveis.

Se criar uma variavel sem o var, ele entende que ela vai ser criada no escopo global, mesmo declarando ela dentro de uma funcao. 

function newFunction() {
  newVar = 'variavel global';
  return newVar;
}

Se eu chamar a variável newVar ela ainda nao foi definida, mas no momento que executo a funcao, ela vai ficar disponível

newFunction() // 'variavel global'
newVar // 'variavel global'

os argumentos de funcao tb sao locais
ex
function outraFuncao(a, b, c) {
  return a;
}

outraFuncao(1)//1
outraFuncao(1,2)//1

a// a is not defined

argumentos sempre ficam dentro da funcao, nao tem como acessar no escopo global