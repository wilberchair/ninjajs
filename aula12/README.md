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