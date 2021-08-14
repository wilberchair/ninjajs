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