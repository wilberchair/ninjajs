Operador Vírgula
Ela vai separar algumas expressoes e vai juntar numa unica expressao
Ex
var a, b=2, c;
Neste exemplo ele separou as variáveis porém atribuiu cada um a uma variável

outra forma de usar é quanto tenho o retorno de uma funcao

function myFunc() {
  var x = 0;
  return (x += 1, x); // aqui ele avalia a primeira expressao, avalia da esquerda pra direita, e antes de retornar o x ele irá fazer a variacao do x += 1, e após isso irá retornar o x, parecido com o incremento ++x.
}

function myFunc() {
  var a= 1, b = 2, c = 3 //se eu usasse um ponto e virgula na a, ele criaria b e c como variaveis globais
  return [a, b, c]
}

É melhor utilizar a palavra reservada var do que declarar variaveis assim pq se vc precisar dar manutenção no código é mais difícil, com a palavra var fica mto mais fácil de mudar se for preciso.

<<<<<<<<<<<<<< Switch >>>>>>>>>>>>>>

é uma forma de fazer estrutura condicional

function myFunc(x) {
  switch(x) {
    case 1:
    console.log('x é 1');
    break;
    case 2:
    console.log('x é 2');
    break;
    default:
    console.log('x nao é nem 1 nem 2');
  }
}

<<<<<<<<<<<<<<<< While >>>>>>>>>>>>>>>>
sintaxe

var counter = 0

while(counter < 10) {
  console.log(counter);
  counter ++;
}