Retorno de Funcoes com arrays e Objetos

Eu posso retornar diversas coisas na função, posso retornar true, false,
uma função vazia, etc...

E também posso criar uma funcao que retorne arrays

myFunction() {
  return [1, 2, 3]
}

myFunction() //[1, 2, 3]

Caso eu queira pegar apenas um índice desta funcao basta eu escolher qual posição eu quero.

myFunction()[0] //1
myFunction()[5] //undefined ele irá ignorar

Retorno de funcao pode ser um objeto também

function myFunction() {
  return {
    prop1: 1,
    prop2: 'Wilber',
    prop3: function() {
      return 'prop3';
    }
  }
}

Com isso eu nao preciso criar uma variavel para um objeto no escopo global para ter um objeto, posso colocar isso dentro de uma função dentro de um escopo reservado!

<<<<<<<<<<<< Parametros de funcoes como arrays e objetos >>>>>>>>>>>>

Também conseguimos passar como parametros arrays e objetos

var arr = [1, 2, 3]

function myFunction(arg) {
  return arg;
}

myFunction(arr)// [1,2,3] retorna o array

function myFunction2(arg) {
  return arg[1]
}

myFunction2(arr) // vai retornar o segundo indice, 2

myFunction(['wilber', 1, true, 34]) // ele irá retornar meu array
pq a funcao espera um array como parametro

var obj = {
  propriedade: 'wilber',
  curso: 'Javascript Ninja',
  ninja: true
}

function myFunction2(arg){
  return arg.curso;
}

myFunction2(arg)// Javascript Ninja

Caso eu passe o objeto no argumento, eu posso ver as propriedades quando chamo a funcao

myFunction2(obj).ninja // true