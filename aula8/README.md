A importancia de nomear funções

var func = function() {}

De preferencia o mesmo nome da funcao
qd nomeio eu facilito o debug da funcao! No debugger ele vai mostrar
o nome da função para debugar!
O proprio objeto function no javascript tem propriedades e métodos

var func = function() {
  return 'hi';
}
func(); // hi
func.name; // vai retornar o nome da funcao se eu chamar sem invocar = func

a funcao sem chamar ela é um objeto, e ela tem uma propriedade chamada name
se eu nao nomear uma funcao ele vai vir vazio '' 

Se eu executar uma funcao sem dar um nome pra ela vai gerar um erro, pq o js espera que a funcao tenha um nome

function() {} // se eu chamar assim irá reclamar que a funcao requer um nome

function fun(){} //assim irá funcionar ou se eu guardar numa variável a funcao também conforme abaixo
var fun = function myFun() {} //myFun

function myFun() {} //myFun

<<<<<<<<<<<<< programacao funcional >>>>>>>>>>>>>

Funcoes sao cidadãos (objetos) de primeira classe, isso quer dizer que o que você quiser fazer em um objeto vc consegue fazer numa classe, elas tem o mesmo tratamento que um objeto.

O Javascript dá essa liberdade de programar de outras formas.

Objetos literais
var car = {
  brand = 'Chevrolet',
  model: 'cruze'
}

Funcoes literais
function sum(x,y) {
  return x + y;
}
vc cria com a palavra function, passa parametros, abre as chaves e coloca as instrucoes, e quanod chama ela, executa as instrucoes

como vc pode atribuir objetos a variaveis..
var obj = {}

você também pode fazer isso com funcoes
var func = function func() {}

Podemos retornar objetos dentro de uma funcao

function person() {
  return {
    name: 'Wilber',
    lastName: 'Lima'
  };
}

ou pode usar uma abordagem parecida

function person() {
  var info = {
    name: 'Wilber',
    lastName: 'Lima'
  };
  return info;
}

Posso chamar as propriedades desta funcao
person().name //Wilber
person().lastname //Lima

eu preciso executar a funcao para ter acesso ao objeto, senão não consigo pegar os valores

<<<<<<<<<<< Posso Retornar funcoes >>>>>>>>>>>

function adder(x) {
  return function(y) {
    return x + y;
  }
}

Da mesma forma como consigo retornar objetos, consigo retornar funcoes

function adder(x) {
  function addOther(y) {
    return x + y;
  }
  return addOther;
}
Neste caso estou executando a funcao e no retorno nao estou executando a segunda funcao, pq na hora da criacao da funcao que vou chamar ela.

var add2 = adder(2);
add2(3) //5

E posso fazer desta forma pq quando executo a funcao ela está chamando outra funcao
adder(2)(3) //5

<<<<<<<<<<< Como pasar objetos por parametros >>>>>>>>>>>
var car = {
  color: 'yellow'
}

function getCarColor(mycar) {
  return mycar.color;
}

getCarColor(car) // yellow

<<<<<<<<< Posso passar funcoes por parametro >>>>>>>>>

function showOtherFunction(func) {
  return func();
}

showOtherFunction(function() {
  return 'Functional JS Ninja';
})

//'Functional JS Ninja'

function showOtherFunction(func) {
  return func();
}

function returnedFunction() {
  return 'Returned function';
}

showOtherFunction(returnedFunction) //'Returned function'

