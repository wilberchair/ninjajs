WRAPPER OBJECS
Valores primitivos não sao objetos
Pra lembrar, valores primitivos são:
boolean, string, null, undefined, true, false...


Todos outros são objetos: array, function, objetos

O que diz se algo é objeto ou nao?
Se ele tem propriedades e métodos!

var name = 'wilber'

name.length // 6

pq eles tem propriedades?? Sendo que string é primitivo?

é aí que entra os objetos construtores > wrapper objects

Wrapper objetcs são objetos ou funcões que criam novos objetos



var name = new String('Wilber');

var age = new Number(33);

var ninja = new Boolean(false);

usamos construtores usando a palavra new
Quando criamos construtores, na verdade eles são objetos!

Como objeto, ele tem propriedades e métodos, então por baixo dos panos
é como se ele tivesse usado esse construtor quando declarei a variavel name

se eu chamar o valueOf deste obj retornara a string Wilber, que é o valor
literal que tenho na string.

Entao quando eu crio a variavel e coloco a string nela e depois chamo o length, não é essa string que ele ta vendo. O JS cria um novo objeto,
um wrapper objetc e fará um envoltório, envolver minha string num objeto,
para que eu possa utilizar o a propriedade lenght.

Logo após fazer essa verificação o Js descarta esse objeto da memória e o 
name continua sendo minha propriedade.

Claro que isso não é algo que vamos utilizar... utilizamos o objeto literal.

Eles servem mais como conversores do que como construtores.
Ex

var myVar = String(10);

myVar //'10' Ele irá converter para uma string

A mesma coisa irá acontecer para números

var myVar = Number('5'); //5
myVar + 2 //7

Se eu utilizar myVar = Boolean({});
myVar //true

seria a mesma coisa que !!{} //true
mostrando o equivalente booleano do valor

<<<<<<<<<<< typeof >>>>>>>>>>>

Conseguimos verificar o tipo do valor, se é um número, uma string, etc

typeof <operando>

funciona só ele e operando, se eu passar o valor ele retorna o valor
Ex

typeof undefined; // 'undefined'
typeof function() {}; // 'function'
typeof true; // 'boolean'
typeof 10; //'number'
typeof 'JS Ninja' // 'string'
typeof {} // 'object'
typeof []; 'object';
typeof null; 'object' ERRO NA IMPLEMENTACAO DO JS
typeof NaN; // 'number'

Posso confiar nele somente quando for para testar valores primitivos!

Caso eu faça uma funcao que espere dois resultados como abaixo
function sum(num1, num2) {
  return num1 + num2;
}

sum(3, 'wil') // '3wil' concatenará
sum([], {}) // '[object Object]' vai retornar isso pq ta tentando somar
2 objetos

agora se eu fizer o inverso, function subtraction(num1, num2) {
  return num1 - num2;
}

subtraction(3, 'wil') // NaN
subtraction([], {}) // NaN

o + junta elementos, diferente dos outros sinais, tem uma sobrecarga.

Já o sinal de - espera dois números pra poder efetuar a operacao, e se nao
vier o numero vai vir um NaN

Para evitar esse retorno eu posso usar o typeof

function subtraction(num1, num2) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 - num2;
  }

  return 'Entre com dois números!'
}

subtraction(10, 2) //8
subtraction('JS', 2) //Entre com dois números!
subtraction([], {}) //Entre com dois números!

Posso verificar também se os argumentos passados nao sao nulos
para nao ter respostas indesejáveis

function subtraction(num1, num2) {
  if(num1 === null) {
    return 'Não entre com valores nulos!'
  }
  return num1 - num2;
}

subtract(10, 5)// 5
subtract(null, 5) // Não entre com valores nulos!


