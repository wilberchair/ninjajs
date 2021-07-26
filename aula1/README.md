<<<<<<<<<<<<<<<<<< Tipos de dados >>>>>>>>>>>>>>>>>>>>>>>

Javascript aceita vários tipos de dados>
number = numeros, inteiros ou reais
string = texto com aspas simples ou duplas
boolean = true / false
null = nao tem valor definido
undefined = ausência de valor

Variáveis = o nome em sí já diz, ela é variável pq tem um valor que pode variar.

object {} este é o sinal de representacao literal dele
objetos tem propriedades e métodos
ex propriedade
objeto pessoa{
  altura: 1.80,
  peso: 75
}
essas sao as props
para pegar os valores
pessoa.altura
pessoa.peso

pessoa.altura = 1.90 (assim eu posso mudar a propriedade diretamente)

array [] é uma lista de valores
var numeros = []
numeros = [1,2,3,4,5,6]
acessamos esses valores por indice
numeros[0] devolverá o primeiro valor

Os arrays sao objetos também.

<<<<<<<<<<<<<<<<<<<<< Operadores >>>>>>>>>>>>>>>>>>>

Operadores aritméticos
adição +
subtração -
multiplicação *
divisao /

incremento ++
decremento --

Operadores aritméticos abreviados
+= 
-=
*=
/=
significa que estou pegando o mesmo valor da variável e estou colocando
a operação desejada
ex
soma = 20

soma += 20 -e como se fosse soma = soma + 20


Operadores de igualdade e relacionais
== significa igual a
!= diferente de

o sinal de igual atribui um valor, o sinal de == é para testar se 
o valor é igual ou diferente do outro

Temos operadores que testam também o tipo do dado
=== igual a e do mesmo tipo
!== diferente, mas do mesmo tipo

ex 1 == '1' a resposta será true
agora se eu quiser quando realmente é uma string ou número, daí uso
o sinal de === ou !== para testar o tipo também

Operadores igualdade / relacionais
> maior que 2 > 1 true
< menor que 2 < 1 false
>= maior ou igual a 2 >= 2 true (porque 2 é igual a 2 então é true)
<= menor ou igual 40 <= 40 true 


<<<<<<<<<<<<<<<<<<<< Funcões >>>>>>>>>>>>>>>>>>>>
Bloco de código js nomeado, e pode ser invocado usando o operador ()

criando função:
utilizo a palavra chave function, dou um nome para a funcao
caso queira que seja uma funcao nomeada, abro e fecho parenteses
e dentro das chaves irá o conteúdo da função

EX: function nome() {}
Esta funcao nao tem conteúdo nenhum então retornará undefined

Para invocar esta funcão basta executar nome()
Este é o básico para criar uma função

se eu nao usar o operador () ele apensa vai retornar a function, mostrando o que ela tem... nao irá executar o que tem dentro dela

a cada final de instrução eu coloco um ; para determinar ali que aquela
instrução da linha foi finalizada

var x = 1
function soma() {
  x = x + 1
}

x vai mostrar 1

soma() ao executar a funcao vai retornar undefined pq nao tenho nenhm valor dentro dela, mas se eu chamar o x novamente, ele terá sido alterado para 2, pq a funcao soma faz a soma. E se eu chamar novamente a funcao soma irá dar o resultado 3 e assim por diante.

Funções criam escopo
function xablau() {
  var wilber = 'wilber';
}

se eu chamar a variavel wilber virá undefined, pq ela está dentro da funcao, o escopo dela existe apenas lá dentro. Consigo acessar apenas
valores externos.

function xablau2() {
  var wilber = 'wilber';
  return wilber;
}

Neste ponto estou retornando um valor!
Funçoes criam escopo e podem retornar valores

agora se eu executar xablau2() irá mostrar o nome que está definido na variável da funcao

Isso abre espaço para fazer outras coisas legais

ex var y = 4

function cinco() {
  return 5;
}

cinco() //5

y + cinco() //9

Funcoes podem receber argumentos ou parâmetros!

function soma(x, y) {
  return x + y;
}

Passei dos arguemtnos, e vou poder passar eesses valores quando eu chamar a funcao, e sao valores que vou poder passar quando eu chamar ela

soma() //NaN not a number - acontece quando ele espera uma expressao que deveria ser feita com numeros e não retorna número

soma(1,2) //3


