USE STRICT
é uma diretiva que iremos usar no JS. Foi introduzido a partir do ecmascript5.
O Ecmascript é um consórcio, ou um local onde criam os padrões para a linugagem javascript
Na história, o javascript se chama ecmascript. Ele diz o que vai entrar ou nao no javascript, que tipo de métodos ou funcoes farão parte da linguagem.
Os browsers mais novos já rodam ecmascript5, e os métodos que estamos aprendendo estão relacionados ao ecmascript5

Estamos vendo novamente sobre escopo local e global. Aprendemos que se declararmos uma função fora de escopo ela será global. E mesmo se eu criar uma variável dentro de um escopo fechado, numa IIFE por ex, mas nao usar a palavra chave var, a variável será criada em escopo global

O use strict serve justamente para previnir isso, ele lança de cara uma reference error, pois agora esse escopo será restrito!

Esse escopo restrito resolve os problemas que o ecmascript3 trazia
Entao em qualquer browser que rode o ecmascript5, irá reconhecer essa diretiva
e para utilizar basta colocar esta string no início do código: 'use strict';

Ela nao vai fazer nada.. apenas indicar para o browser que o conteúdo a partir dali está em escopo restrito.

(function(){
  'use strict';
  myName = 'Wilber';
  console.log(myName)
})();
console.log(myName) //irá lançar o erro de referenceError no console, mas irá apontar para a linha 3, dentro da funcao onde eu declarei a variável sem o var

Se eu utilizasse o 'use strict' fora da funcao, ele funcionaria para todo o escopo.

<<<<<<<<<<<<<<<<<<<< uso do with>>>>>>>>>>>>>>>>>>>>
como vimos, o use strict nao permite criar variáveis sem o var, e ele nao permite também usar o with

O with serve para diminuir o tamanho de um objeto

ex:
(function(){
  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31: 'prop31';
          prop32: 'prop32';
          prop33: 'prop33';
        }
      }
    }
  }
})();
console.log(obj.prop1.prop2.prop3);

Para eu acessar esses elementos sem precisar ficar repetindo
na hora de eu chamar as propriedades desse objeto não precisarei ficar repetindo toda essa instrução
with(obj.prop1.prop2.prop3) {
  console.log(prop31, prop32, prop33); //prop31, prop32, prop33
}

As variáveis que eu chamar dentro do with saberao que são baseadas nesse objeto

se eu tivesse que chamar normalmente essas variáveis, eu teria que fazer o console 3x
console.log(obj.prop1.prop2.prop3.prop31);
console.log(obj.prop1.prop2.prop3.prop32);
console.log(obj.prop1.prop2.prop3.prop33);

Mas o with pode acabar se confundindo com variáveis fora do escopo, então por isso o with não é permitido dentro do strict

Se utilizarmos o use strict irá lançar uma syntaxError, onde mostrará que o código nao poderá ser incluído com with statement


No escopo global, com o strict o this dentro de funções é igual a undefined
this === undefined

o this aponta para window no escopo global

(function(){
    'use strict';
    console.log(this) //undefined
})()

Se eu criar um objeto e usar o this como referência, com o use strict ele nao irá permitir que eu instancie um objeto sem a palavra new, vai lançar um erro no console
(function(){
    'use strict';
    function Person(name, lastName, age) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
    }
    console.log( Person( 'Wilber', 'Lima', 34 ) )
})()
console.log( name, lastName, age );

Se eu chamar o objeto Person como uma funcao, sem o strict, ele vai trazer no console que person é undefined, mas se pesquisarmos name, lastName ou age, eles estarao disponíveis no escopo glogal

o console de baixo conseguirá acessar tudo

mas se eu uso a palavra new para instanciar Person, ai sim o console de fora não irá conseguir acessar o objeto

Se eu nao instanciar é como se o this fosse o window.name, window.lastName....

Então o use strict ajuda nesse aspecto também, caso não utilize a palavra new, dará erro

Se eu der um console.log no this dentro da funcao, com o strict, ele será undefined, inclusive se eu fizer a comparacao this === undefined //true

Entao em resumo o with faz com que o this se torne undefined para nao ficar pendurado no escopo global!

<<<<<<<<<<<< operador delete >>>>>>>>>>>>

Ele lança uma sintaxe de erro se nao puder deletar
O delete nao pode ser usado em alguns momentos

(function(){
  var myVar = 2;
  var obj = {
    prop1 = prop1;
    prop2 = prop2;
    prop3 = prop3;
  };
  console.log(delete prop1, obj) //vai retornar true e como estou chamando no console o obj, irá mostrar o obj sem a prop1
})

Mas se eu tentar deletar a variável myVar ele retornará false

E se estivermos no modo estrito, lançará uma mensagem de erro dizendo que o Delete não é qualificado no modo strict

Se eu nao estiver no modo strict ele nao irá deletar, ele só retorna false e o objeto continua lá

Resumindo O delete serve para deletar propriedades de objetos!!!

Ele não deleta qualqeu coisa que não seja propriedade de obj, nao vai deletar objeto, variáveis ou coisas do tipo

<<<<<<<<<<<<<<<<<< Objetos >>>>>>>>>>>>>>>>>>

Mesmo sendo óbvio, propriedades de objetos nao devem ter o mesmo nome, pois se eu chamar 2 com o mesmo nome por ex, ele só irá ler a ultima, sobrescrevendo a primeira

No modo strict ele lançará um erro avisando que não é permitido

<<<<<<<<<<<<<<<<<<< Funcoes >>>>>>>>>>>>>>>>>>>
Argumentos de funcoes também nao devem ter nomes iguais
(function(){
  'use strict';
  function myFunction(a, a, b) {
    return a + b;
  }
  console.log(myFunction(1, 2, 3)) //5 ele ignorou o primeiro parâmetro
})()

Usando o modo strict lança um erro no console avisando que nao pode ter parâmetros duplicados

<<<<<<<<<<<<<<< Object string >>>>>>>>>>>>>>>
Faz exatamente o que faz o length do array, conta a quantidade de caracteres de uma string

(function(){
   'use strict'
   console.log('Wilber'.length)
})()

Quando fazemos isso é como se eu usasse o objeto construtor String
var wil = new String('Wilber')
wil.length // 6 

Ele usa o String como wrapper object. Ele faz o wrapper na string, transformando em objeto, e daí o objeto 'Wilber' tem a propriedade length

<<<<<<<<<<<<<<<<<<< Object charAt >>>>>>>>>>>>>>>>>>>
charAt é um método de string
Ele diz qual é o caractere no indice que eu passar. Ele tem o índice como parâmetro

.charAt(index)

Ex:
'Wilber'.charAt(0) // 'W'
funciona como notacao de array também: 'Wilber'[0] //W

A string é como um array like, tem algumas coisas do array como o length e podemos usar a sintaxe de array pra pegar os valores da string num índice específico
Se eu colocar um índice que nao existe no charAt ele retornará uma string vazia

<<<<<<<<<<<<<<<<<<<<< Método concat >>>>>>>>>>>>>>>>>>>>>
.concat(str1, str2, ..., strN)
Ele funciona igual o array, irá concatenar
'Wilber'.concat(' Lima', ' amo', ' minha', ' familia') // Wilber Lima amo minha familia

Obs: ele nao modifica a string principal, ele cria uma nova string

<<<<<<<<<<<<<<<<< método IndexOf >>>>>>>>>>>>>>>>>
.indexOf(string, [, start])
Nos arrays ele pega o índice. Ele verifica o indice da string no array. No caso da string é a mesma coisa

posso passar um valor inicial também que ele vai contar, nao é obrigatório

var wil = 'wilber'
wil.indexOf('l') // 2
wil.indexOf('z') // -1
esse -1 é pq nao existe esse valor na string
wil.indexOf('ber') // 3 pq p B começa no índice 3

<<<<<<<<<<<<<<<<<< lastIndexOf >>>>>>>>>>>>>>>>>>
Funciona exatamente como o index of, mas buscando de trás pra frente

.indexOf(string, [, start])

<<<<<<<<<<<<<< Replace >>>>>>>>>>>>>>
.replace(string, newString)

Substitui um trecho da string por uma nova string
var wil = 'wilber'
wil.replace('w', 'z') // zilber (se hovesse mais w ele trocaria apenas a primeira)
Ele nao altera a string original, mas cria uma nova

<<<<<<<<<<<<<<<<<<<<< Método slice >>>>>>>>>>>>>>>>>>>>>
.slice(start, [, end])
funciona exatamente como no array, vai ter indice inicial e indice final

Ex:
var wil = 'wilber'
wil.slice(3) //ber
wil.slice(3, 5) //be

E como nos outros, a string principal nao é modificada

<<<<<<<<<<<<<<< split >>>>>>>>>>>>>>>
recebe 2 parametros, um separador e outro delimitador
.split([separator], [, limit])

var wil = 'wilber'
wil.split() // [wilber] // se eu nao colocar nada, o split vai transformar minha string num array

wil.split('l') // ['wi', 'ber'] //na letra que eu escolhi ele fará a divisao e removerá ela

Podemos lembrar que temos o método join, que junta o array, e posso juntar novamente esse array com a letra L onde separei

wil.join('l') // wilber

Para fazer o replace trocando varias letras, como vimos antes que não podia, utilizando o split com o join isso é possível!

var mari = 'mariana'
mari.split('a').join('b') //mbribnb

<<<<<<<<<<<<<<<<<< substring >>>>>>>>>>>>>>>>>>
.substring(start, [, end])
faz basicamente o mesmo que o slice

var wil = 'wilber'
wil.substring(3) //ber
wil.substring(3, 5) //be

a única diferença é que se eu inverter os números, se o num inicial for maior que o final, ele conseguirá
pegar do indice final ate o inicial
 wil.substring(5, 1) //"ilbe"

 é como se fosse um lastIndexOf do indexOf

 <<<<<<<<<<<<<<< toLowerCase e toUpperCase >>>>>>>>>>>>>>>
o toLowerCase irá transformar o array em letras minúsculas e o toUpperCase todas em maiúsculas

Para brincar um pouco com os métodos, eu posso transformar a primeira letra em maiúsculo
wil.toLowerCase()
var newWil = wil.charAt(0).toUpperCase() + wil.slice(1) // Wilber
