JS NO BROWSER

Como incluir js no nosso browser?

Existe uma tag chamada script onde adicionamos o arquivo na propriedade src. Ou colocamos nosso script dentro desta tag

O javascript pode ser incluído em qualquer parte do nosso html, tanto no head quanto no body. No exemplo vamos colocar a tag no head para o script ser carregado antes do conteúdo ser iniciado.

Antigamente era mais correto os scripts ficarem no head pois era mais comum a lógica ficar em cima.
 Mas com o tempo, com a quantidade de scripts que precisavar sem adicionados, o site começava a perder performance, pq o browser irá baixar todos aqueles scripts, ler eles pra depois renderizar o site

Então vamos usar a tag script no final do body

O recomendado é utilizar scripts externos, utilizando a propriedade src

Quando fazemos assim, o script vai ser lido e vai ficar na memória, então nas prox vezes que este site for carregado, ele já terá o script no cache

<<<<<<<<<<<<<< ESCOPO >>>>>>>>>>>>>>
Nas aulas anteriores ouvimos falar sobre escopo... global, local
E começamos a envolver nosso js numa IIFE para que o js tivesse um escopo local

Fizemos um exemplo de variavel global, criando meu nome em um arquivo, e dando um console nesta variável
no main2.js e ele encontrou a variável, por estar num escopo global

Por isso a importância de declarar nossas variáveis em escopo local

Com isso envolvemos nosso main.js em uma IIFE e o main2 não encontrou a variável, mas percebemos que a variável
continua alocada na memória do Browser, isso pode gerar problemas! Mais um motivo de se usar vars locais

E se eu declarar uma variavel global name por ex, e dentro do meu escopo local chamar name e atribuir outro valor, ele vai alterar o valor da variável global

E se eu der um console.log tanto dentro como fora, o resultado será o mesmo pq no escopo local eu sobrepus o valor

<<<<<<<<< OBJETO THIS >>>>>>>>>
Encontramos ele em métodos e objetos
Ele faz referência ao objeto principal

Ele é uma palavra chave, é um objeto dentro do javascript
dependendo da forma que usar, ele pode representar uma coisa diferente

Ele vai apontar para "este" objeto que estiver dentro

O this irá apontar para o objeto que ele está dentro, fazendo uma referência ao próprio objeto

seria a mesma coisa de eu colocar no lugar do this, o proprio objeto no retorno dele!

O This também aparece em funcoes, e ai ele pode ter 2 valores. O primeiro valor é referencia ao objeto global, no caso o window
No browser ele se chama window, no node é global

Se eu usar o this numa função, ele retornará window

Outra forma é quando ele faz referência ao objeto instanciado

Podemos criar construtores no javascript usando a palavra new

var newObject = new Object();
console.log('newObject', newObject); // retornará um obj vazio

usando o formato de construtor, que é com a palavra new, com a funcao Object()
nos retorna esse objeto vazio

O new vai criar uma nova referência de Object para minha variável newObject

Se eu fizer essa comparação
console.log('newObject', new Object() === new Object()) // false

pq sao dois objetos sendo criados de forma diferente na memória

mesma coisa se eu fizer isso
console.log({} === {}) //false

Este exemplo acima é o construtor padrão do JS, mas nós podemos criar o nosso. E como padrão, os construtores sempre começam com letra maiúscula por convenção, e usamos a palavra new quando vamos chamar esse construtor, instanciando ele. Quando fazemos isso, ele cria uma instância deste construtor com as propriedades que definimos dentro dele, sem precisar usar um return

com isso posso criar novos objetos instanciando o que criei.

EX>
var constructor = new MyConstructor()
console.log(construcor.prop1) //'prop1'

se eu criar uma: 
prop1 = 'propriedade1'
console.log(prop1) //'propriedade1'
console.log(window.prop1) //'propriedade1'
sem declarar a palavra var, estou criando ela em escopo global, mesmo estando em um escopo fechado, vai ficar pendurado no window

com o this utilizado dentro da funcao, estará apontando para dentro deste escopo, fazendo referência ao constructor

se eu nao usar o new, chamando direto o MyConstructor() como funcao
 e der um console em prop1, ele vai retornar o valor 'prop1', por que como chamei essa funcao como uma funcao normal, e nao intanciei, vai pendurar o prop1 no window, o this representará o escopo global

 <<<<<<<<<<<< arguments >>>>>>>>>>>>
Objeto arguments
Ele é um objeto array like, pq ele é parecido com um array, funciona como um array mas não é um array e ele aparece implicitamente dentro de funções
 
 podemos usar ele para receber varios argumentos de uma funcao... ex
 (function() {
  function myFcuntion(arg1, arg2) {
    return arguments;
  }
  console.log('ARGUMENTS', myFcuntion(1, 2))
})() //[1, 2]

Ele retorna como se fosse um array, mas nao é um array
E podemos também acessá-los da mesma forma como se fosse um array: arguments[0]

Posso inclusive nem passar argumentos para a funcao, mas no momento de chamar a funcao,
passando os argumentos consigo mostrar o resultado de cada indice, e se eu colocar um indice
que nao existe irá retornar undefined

(function() {
  function myFcuntion() {
    return arguments[1];
  }
  console.log('ARGUMENTS', myFcuntion(1, 2))
})() //[2]

inclusive nao posso colocar como argumento da funcao a palavra arguments, senão irá sobrescrever o arguments que está no retorno da funcao, e no caso de cima, ele retornaria o numero 1

(function() {
  function myFcuntion(arguments) {
    return arguments;
  }
  console.log('ARGUMENTS', myFcuntion(1, 2))
})() //[1]

Não devemos usar palavras reservadas para funcoes ou argumentos

Caso eu queira fazer encadeamento de funcoes posso fazer desta forma:

console.log(mari.getFullName() + ' agora tem ' + mari.addAge(2).getAge() + ' anos')