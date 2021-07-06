Operadores lógicos
Combinam ou invertem valores booleanos

&& combina 2 valores e vai retornar se é true ou false

x = 3
y = 7
x === 3 // true

y === 5 //false
y === '7' //false pq estou verificando o tipo também
y === 7 //true

se eu quiser testar pelas duas formas de uma vez so
se o x = 3 e se o y = 7

x === 3 && y === 7 //true
x === 3 && y === 4 //false

para retornar true as duas condições tem que ser verdadeiras

|| or - este é true se apenas um valor for verdadeiro, ele precisa apenas de uma condição verdadeira para passar na validação

! not - ele vai inverter o valor

ex: x !== '3' //false
ex: x != '3' //false
ex: x !== '3' //true
ex: x == 3 //true
ex: x == '3' //true

É importante usar o operador estrito === / !== pq ele faz a comparação e ve o tipo também.

Operadores unários
+ e -

quando temos dois valores 3 + 3 vai somar
quando uso +3 ele vai tentar converter esse valor
exemplo +'3' string ele converte para number //3

Se eu fizer por ex 'wilber' ele vai retornar um NaN pq não é um número

Ele serve para concatenar também
Ex 'Wil' + 'ber' //Wilber
'3' + 3 // irá concatenar e vai devolver uma string '33'
sempre que somo uma string com numero o js entende que quero concatenar

O operador unário - faz a mesma coisa mas subtraindo
var x = 3
-x //-3
se eu fizer -'3' ele irá converter para -3

<<<<<<<<<<<< Estrutura Léxica >>>>>>>>>>>>

Conjunto de regras que irá definir qual o nível mais baixo da linguagem

Como podemos nomear funcoes, como criar comentários, variáveis, tipos de caracteres utilizar.. etc

Ela nos dá a base pra saber o qeu usar ou nao no JS

Case sensitive > o js diferencia letras maiúsculas de minúsculas
ex:
var animal = 'cachorro'
var Animal - 'macaco'

São variáveis diferentes

comentários
de linha //comentario
de bloco /*
  comentario
  comentario
  comentario
*/
ou pode usar o bloco numa linha só também /* comentario */

Literais

valores que nao mudam, que fazem parte do core do JS

ex:
12 é um literal, é um número
true
null
'strings'
"strings"
{a: 1}
[1, 2]

Identificadores

Nada mais são do que nomes

usamos pra nomear uma variavel
eles podem iniciar com _ ou $
letras de a a z
letras de A a Z
dígitos de 0 a 9
Podem conter caracteres unicode mas NAO deve utilizar para outros que forem dar manutenção no código

 No MDN tem uma pagina que mostra as palavras reservadas que nao podemos usar para nomear funcoes (break, case, var, switch, etc)

 Condicionais
 IF
 if define ou toma decisao do que a gente quer fazer ou executar
 var x = 3
 var y = 3

 if(x === y x === 3) {
   x = 5
   y = 2
 }

  if(x === 5 || x === 1) {
   x = 1
   y = 1
 }

 ELSE

 irá entrar no else se a condição do if nao for verdadeira

 if(x === 2) {
   y = 2
 } else {
   y = 10
 }

ELSE IF
para testar mais coisas

 if(x === 2) {
   y = 2
 } else if(y === 3) {
   x = 3
 } else {
   x = 0;
   y = 0;
 }



