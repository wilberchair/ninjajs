OBJETOS

São mutáveis e manipulados por referência

var obj = {
  prop1: 'prop1',
  prop2: 'prop2'
}

se eu pegar esse objeto e atribuir uma nova propriedade pra ele, ele será mudado

obj.prop1 = 'propriedade 1'; 

obj // {prop1: 'propriedade 1', prop2: 'prop2'}

consigo deletar props de objetos também!!!

delete obj.prop1 //retorna true e agora o obj só terá a prop2

E se eu quiser add uma nova prop1 posso adicionar também!

obj.prop1 = 'prop1';

Diferente de valores literais, que não consigo modificar

ex var name = 'Wilber'

Eles são manipulados por referência! Se eu tiver outro obj igual, cada um será diferente
do outro!

obj === obj2 //false;

São dois objetos diferentes criados na memória, eles nao apontam para o mesmo lugar

Se eu criar uma variavel objCopy e atribuir a ela o obj
var objCopy = obj

quando eu fazer a comparação será true
objCopy === obj // true
pq ele tem uma referência do mesmo objeto!

E se eu mudar o objCopy, colocar uma nova propriedade ou alterar, irá refletir
no obj! Pq eu passei meu obj como referência para o objCopy.

Por isso este termo de ser manipulados por referência

<<<<<<<<<<<<<<<<< Criando Objetos >>>>>>>>>>>>>>>>>

Objetos literais
como construtor (New)
com Object.create

Objetos literais são exatamente da forma como estávamos criando
var obj = {}

com construtor utilizamos a palavra new para instanciar ele

var newObj = new Object();
newObj // {}

é mais interessante utilizar o literal do que o construtor por ser mais rápido a resposta.

Tem também a palavra interna do js Object,  que é uma funcao js, e retorna um objeto
Object// [Function: object]
Object() // {}

Esse Object tem uma propriedade chamada create:

var obj = Object.create()

Quando eu faço isso diretamente gera um erro de null ou undefined

object.prototype

Essa propriedade prototype é um protótipo de um obj que está sendo criado!

Cada objeto criado, herda seu protótipo, e conseguimos acessar ele com o prototype

Se eu retornar um Object.prototype // {}

no JS temos outros tipos de objetos, como o Array, objeto Date, RegExp, String, etc...

Todos esses herdam do Object.prototype

Isso é o conceito de herança

O único que nao herda nada é o proprio Object.prototype

<<<<<<<<<<<<<< Object.create() >>>>>>>>>>>>>>

var obj = { x: 1, y: 2 };
var obj2 = Object.create(obj)
obj2 // {}
obj2.prototype // undefined
obj2.x //1
obj2.y //2

Qualquer alteracao que eu fizer no ojb irá refletir no obj2, mas se eu alterar no obj2, não alterará o obj. O objeto pai nao muda seu valor

Eu também poderia criar um objeto desta forma que ele herdaria propriedades
do Object.prototype

obj = Object.create({})
desta forma o obj irá herdar as propriedades que tem dentro do Object
obj.toString() por ex

Se vc criar um outro objeto, ex obj3 e ele herdar de obj2, e alterarmos uma prop do obj2, o obj pai nao será afetado pq nao foi nele que foi alterado

Se eu utilizar um for in, ele ira acessar as propriedades do objeto, inclusive do pai!

Ex:

for(var prop in obj) {
  console.log( prop );
} // x, y

for(var prop in obj2) {
  console.log( prop );
} // x, y

temos uma propriedade chamada hasOwnProperty que verifica se o objeto tem alguma propriedade
EX:

obj.hasOwnProperty('x') //true
obj2.hasOwnProperty('x') //true
obj2.hasOwnProperty('y') //false pq o obj2 nao tem a prop y, ela foi herdada do pai

Se eu quiser fazer uma iteração pelo objeto e mostrar apenas as propriedades que são só dele, posso
utilizar essa propriedade

for(var prop in obj2) {
  if( obj2.hasOwnProperty(prop) ){
    console.log(prop);
  }
} // x
for(var prop in obj2) {
  if( obj2.hasOwnProperty(prop) ){
    console.log(prop);
  }
} // x e y serao retornados

<<<<<<<<<<<<<<<< OBJECT KEYS >>>>>>>>>>>>>>>>

Ele irá trazer ou retornar um array todas as propriedades do meu objeto!
EX:

Object.keys(obj) //['x', 'y']

Isso é interessante pra fazer alguma coisa que só um array faz, como por ex contar a quantidade
de propriedades de um objeto

Object.keys(obj).length //2

<<<<<<<<<<<<<<<<<< Object.isPrototypeOf >>>>>>>>>>>>>>>>>>
Verifica se o objeto está sendo herdado de outro

Ex
obj.isPrototypeOf(obj2) //true
obj.isPrototypeOf(obj3) //true
caso eu tenho um outro obj que foi herdado do obj2 por ex... ele irá trazer true
pq o obj2 herda as coisas do obj

obj2.isPrototypeOf(obj3) //true
obj2.isPrototypeOf(obj) //false

O protótipo é sempre o objeto principal!

se eu criar um objeto 4 por ex...

var obj4 = Object.create(obj3)

obj3.isPrototypeOf(obj4) //true

<<<<<<<<<<<<<<<<<<<<<< JSON.stringify(obj) >>>>>>>>>>>>>>>>>>>>>>

Com esta propriedade podemos stringificar um objeto
ou parsear um objeto transformando numa string> JSON.parse(string)

Ex: tenho o meu obj {x: 1, y: 2}
JSON.stringify(obj) // '{"x":1, "y":2}' //transformou no padrao JSON
JSON é javascript object notation, notacao de objeto do javascript
Json é uma string que representa um objeto em javascript
Eu posso transformar um objeto em notacao JSON e também posso voltar ela com o parse

var srt = JSON.stringify(obj) '{"x":1, "y":2}'
JSON.parse(str) // {x: 1, y: 2}

JSON.parse(true) //true
JSON.parse('true') //true

JSON.stringify(true) //'true'

<<<<<<<<<<<<<<<<<< ARRAYS >>>>>>>>>>>>>>>>>>

Arrays como sabemos sao objetos, e como objetos eles tem propriedades e métodos, e conseguimos usar métodos
para adicionar itens no array

var arr = []
arr[0] = 10 //10
arr[1] = 5 //5
arr[2] = 'oito'
arr[12] = 'doze' // [10, 5, 'oito', , , , , , , , , , 'doze']

quando atribuimos direto pelo índice ele vai ficar com espaços
se eu chamar o arr[11] //undefined

e se eu quiser adicionar algum item no final do array posso usar o push
arr.push('treze');

Também podemos remover itens no array com o .pop()
quando dou um arr.pop() ele retorna o elemnto que removeu
arr.pop() // 'doze'

Posso criar uma variavel tambem e adicionar o ultimo item do array nela
var last = arr.pop()
last // ultimo item do array

arr.length //tamanho do array

<<<<<<<<<<<<<<<<<<<<< JOIN >>>>>>>>>>>>>>>>>>>>>

Se eu usar o join ele irá juntar meus arrays em uma única string
ex

var arr = ['arroz', 'feijao', 'macarrao'] 
arr.join() // 'arroz','feijao','macarrao'

Join aceita parametro, E se eu colocar um parâmetro dentro do join ele será o separador
arr.join(' ') //se eu colocar espaco em branco o separador será o espaço
//'arroz feijao macarrao'

O padrão é a virgula, se eu colocar a virgula e um espaço em branco ele inserirá os dois
//'arroz, feijao, macarrao'

<<<<<<<<<<<<<<<<<<< array.reverse >>>>>>>>>>>>>>>>>>>
Ele serve para inverter o array
var arr = ['arroz', 'feijao', 'macarrao']
arr.reverse() // ['macarrao', 'feijao', 'arroz']

O reverse tem efeito colateral, ele modifica o array, então eu precisaria dar um reverse
novamente para voltar ao que ele era

<<<<<<<<<<<<<<<<< ARRAY SORT >>>>>>>>>>>>>>>>>
Ele irá ordenar o array por ordem alfabética
var arr = ['arroz', 'feijao', 'macarrao']
arr.reverse() // ['macarrao', 'feijao', 'arroz']
arr.sort() // ['arroz', 'feijao', 'macarrao']

Ele também tem efeito colateral e modifica o array

Se eu der um push incluindo um item novo, ele não será ordenado, entrará no final, e com isso
precisarei dar um sort novamente pra ordenar