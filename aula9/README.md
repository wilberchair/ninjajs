ESCOPO DE FUNCOES

É permitido escrever funcoes dentro de funcoes, mas como fica o escopo?

function myFcuntion() {
  function sum() {
    return 1 + 2
  }
  return sum()
}

myFcuntion() //3

Se eu tentar utilizar a funcao sum fora do escopo ela vira como is not defined, pq foi criada no escopo da funcao myFunctioin. Dentro da funcão eu consigo acessar os valores das variáveis que estiverem dentro
do escopo, mas fora não é possível.

A funcao sum está fazendo papel de closure, acessando os valores das variáveis que estão dentro
do escopo que ela existe

function myFcuntion() {
  var number1 = 1;
  var number2 = 2;
  function sum() {
    return 1 + 2
  }
  return sum()
}

myFcuntion() //3

function myFcuntion() {
  function sum() {
    return 1 + 2
  }
  var number1 = 1;
  var number2 = 2;
  return sum()
}

myFcuntion() //3
Desta forma também funciona pq o javascript leu a funcao mas nao executou a funcao sum ainda, então
ele vai ler todo o contexto e no momento da execução as variáveis já existirão

function myFcuntion() {
  var number1 = 1;
  var number2 = 2;
  return sum()
  function sum() {
    return 1 + 2
  }
}

myFcuntion() //3

E desta forma funciona também... e isso acontece por conta do hoisting. A tradução disso
é içamento ou elevação, algo que você está movendo pra cima. É isso queo js faz.

Quando declaramos uma variável depois ela move ela pra cima. Com as funções literais,
mesmo se ela for chamada depois, o javascript move ela pra cima! Mas só se eu nao
declarar ela em uma variável.

Quando eu crio uma funcao numa variavel, é como se ele subisse a variável pra cima,
e ela no primeiro momento sobe como undefined

function myFcuntion() {
  var number1 = 1;
  var number2 = 2;
  var sum = undefined;
  return sum()
  sum = function sum() {
    ...
  }
  
  Funcoes literais estão disponíveis em todo o escopo de onde elas foram criadas

  outro exemplo

  function myFcuntion() {
  console.log('ANTES DE DECLARAR', number1);
  console.log('NUMBER2', number2)
  var number1 = 10;
  console.log('ANTES DE DECLARAR', number1);
}

myFcuntion()
//ANTES DE DECLARAR undefined

//number2 is not defined


o primeior console do number 1 veio como undefined nao pq gerou erro, mas pq a variavel
existe só que ela ainda nao foi definida. É como se o js criasse a var number lá em cima 
e não colocasse valor nenhum.

A funcao myFunction está disponível no escopo global

E quando vemos um undefined no retorno da funcao é pq nao foi definido um return
se eu der um return '' por ex nao aparecerá mias a mensagem

Sempre que for declarar uma variavel ou funcao, declarar em cima, e antes de return
  

<<<<<<<<<<<<<<<<<<<< IIFE >>>>>>>>>>>>>>>>>>>>
immediately-invoked function expression

Significa uma expressao de funcao invocada imediatamente, ou funcao auto executável

tenho essas funcoes como ex

function sum() {
  return 1 + 2;
}

var sum2 = function() {
  return 3 + 2;
}

var sum3 = fuction otherSum() {
  return 5 + 8;
}

Para eu executar essa funcao eu preciso invocar ela usando os parenteses()
console.log(sum())

e no caso da segunda funcao, ela nao tem nome, mas tem uma variavel e posso executar
ela chamando pelo nome da variável
console.log(sum2())

e no caso da sum3

console.log(sum3()) //13
console.log(otherSum()) //otherSum is not defined

isso acontece pq atribuimos a funcao a variavel sum3
Ela nao fica disponível fora do escopo. Se eu colocasse um console dentro da sum3
funcionaria normal, pq ela foi criada dentro deste escopo.

se eu criar uma funcao desta forma nao tem como eu retornar ela:
function() {
  return 1 + 2;
}

pq ela nao foi atribuida a alguma variavel ou a uma propriedade de um obj.

Agora se eu criar um objeto com essa funcao funcionaria.

var obj = {
  prop: function() {
    return 1 + 2;
  }
}

console.log(obj); //mostrará o obj
console.log(obj.prop()); //3

Mas no JS temos a IIFE que é executada automaticamente.

Se eu colocar os parenteses na frente dela nao ira funcionar pq ela é uma funcao
literal, e eu nao consigo executar uma função assim.
function() {
  return 1 + 2;
}();

Para fazer isso, precisamos tornar ela uma expressão, envolvendo ela em parenteses.

(function() {
  console.log(1 + 2);
})(); //3

E agora sim ela irá funcionar!

O javascript qd leu isso, assim que terminou de ler executa a instrucao que está lá dentro.

Qual a vantagem?

Forçamos um escopo local desta forma. Não preciso de um escopo global pra isso.
O escopo global é algo ruim, pq estamos compartilhando informações de todo o projeto!

(function() {
  console.log(1 + 2);
}()); //Funciona também com os parenteses dentro

Se em outros arquivos criarmos alguma funcao ou variavel com o mesmo nome, teremos problemas.
Quanto mais fechado o escopo melhor.

A partir daqui vamos sempre usar IIFE nos exercícios.