Laços loop
do/while

A diferença do do/while para o while é que ele sempre irá fazer a verificação antes de entrar no laço!
EX while

var counter = 1; 
while(counter < 10>) {
  console.log(couunter++);
}

ex do while
var counter = 1;

do {
  console.log(counter++);
}while(counter < 10>);

A diferença é que ele irá executar a linha do console primeiro antes de cair no while! irá executar a instrução antes

<<<<<<<<<<<<<<<<< For in >>>>>>>>>>>>>>>>>

Para criar um for:
for(var i = 0; i < 10; i++){ 
  console.log(i)
}

O for in serve para percorrer propriedades do objeto!

Ex
var car = {
  brand: 'Volks',
  model: 'Golf',
  year: 2017
}

console.log(car);

for( var prop in car ) {
  console.log(prop)
}
//brand, model, year

OBS: o for in é mais lento que o for comum.

Posso testar também se existe uma propriedade em algum objeto:

console.log('brand' in car);// true
console.log('doors' in car);// false

E se eu quiser mostrar os valores desse obj basta eu percorrer o obj
com no formato de array

for( var prop in car ) {
  console.log(car[prop])
}

<<<<<<<<<<<<<< SALTOS >>>>>>>>>>>>>>
Return

function myFunction() {
  var number = 10;
  if(number = 10) {
    return true;
  }
  return false;
}

O return está servindo como um salto aqui, ele pula as instruçoes se a condição for true ou false no caso 

BREAK
O break serve para sair de uma instrução, como no switch case por ex.
var number = 10;

switch(number){
  case 1:
    console.log('1');
    break;
  case 2:
    console.log('2');
    break;
  case 3:
    console.log('10');
    break;
  default:
    console.log('Default');
}

Se eu nao uso o break nessa instrucao ele vai mostrar o 10 e o default também. Pq ele nao vai dar o salto na instrução e vai continuar lendo o código. O break joga o usuario pra fora do switch

for(var i = 0; i < 10; i++) {
  if(i === 5) {
    break;
  }
  console.log(i)
}

posso fazer uma verificação dentrod e um array muito grande por exemplo:
var arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

for(var i = 0; arr.length; i++) {
  if(i === 5) {
    break;
  }
  console.log(i)
}

vai sair do mesmo jeito

<<<<<<<<<<<<<<<<<< CONTINUE >>>>>>>>>>>>>>>>>>

o continue verifica a condição e não deixa a instrucao ir pro final, ela volta a ser executada.
  
for(var i = 0; arr.length; i++) {
  if(i === 5) {
    continue;
  }
  console.log(i)
}// 1, 2, 3, 4, 6, 7, 8, 9

Como vimos quando chegou na condição do 5, ele nao executou o código abaixo mas voltou para o loop