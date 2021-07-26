Tipos de objeto

Tudo o que for fora de tipos primitivos é objeto!

Objeto é um conjunto de propriedades (que podem ter strings, numeros, undefined, etc)

{propriedade: 'valor'} //este é um objeto simples, com uma propriedade chamada propriedade

Posso atribuir um objeto a uma variavel 

var objeto = {propriedade: 'valor', propriedade2: 10, propriedade3: true}

vamos utilizar objetos pra organizar nossos dados, nosso codigo
e eles referenciam objetos da vida real

pra acessar o valor eu uso objeto.propriedade por ex

ex da vida real

var pessoa = {
  nome: 'Wilber',
  idade: 33,
  peso: '75',
  altura: '.80
}

pessoa.nome // Wilber
pessoa.idade // 33

var carro = {
  cor: 'preto',
  motor: 2.0,
  portas: 4
}

carro.cor //preto

Objetos vao guardar propriedades e métodos

Objeto também pode receber outro objeto
function também é um tipo de objeto
funções são objetos de primeira classe, pq podem ser atribuidas a variáveis, ou a algum objeto

var myVar = function() {
  return 'variavel myVar';
}

se eu chamar myVar vamos ver que é uma função
para chamar ela basta fazer o myVar()

Métodos
Quando atribuímos uma função a um objeto, são chamados de métodos

var pessoa = {
  nome: 'Wilber',
  idade: 33,
  altura: 1.80,
  peso: 75
}

se eu atribuir algo novo ao objeto desta forma eu perco tudo que tinha sido colocado no objeto
pessoa = {sexo: 'masculino'}

para atribuir uma nova propriedade, eu devo usar notação de ponto
pessoa.cor = 'branco'

Métodos de um objeto podem ser ações que vou atribuir a uma pessoa...
ex> pessoa.andar = function() {
  return 'Pessoa Andando'
}

para eu utilizar esse médoto eu executo a funcao: pessoa.andar()

vamos criar um método aniversario
pessoa.aniversario = function() {
  pessoa.idade++;
}

Quando eu executar este método, a minha idade irá aumentar 1 ano.

