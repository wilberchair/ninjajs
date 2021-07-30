<<<<<<<<<<<<<<<< toString() >>>>>>>>>>>>>>>>

Em javascript arrays são objetos, não existem arrays de verdade, eles são objetos desfarçados
conseguimos utilizar eles como objetos numeráveis

var arr = [1, 2, 3]

se eu pegar o primeiro indice assim arr[0] //1

E como os arrrays são objetos, eles tem propriedades e métodos

arr.length //3
arr.push(4) // inclui mais um item no array [1, 2, 3, 4]

E temos o toString()
É uma funcao ou método que vai converter nosso objeto para uma string

var obj = {a: 1, b: 2, c: 3}
obj.toString() // '[object Object]' ele converte da forma que acha mais conveniente no objeto

arr.toString() // '1,2,3,4' converte o array para string e separa por uma vírgula, exatamente como o join, e não modifica o array principal, a unica diferença é que no join consigo passar um separador como parâmetro

O toString tem uma implementação diferente em cada tipo de objeto, vamos ver isso mais para frente

<<<<<<<<<<<<<< método concat() >>>>>>>>>>>>>>
concat vai concatenar
O concat faz mais ou menos o que o método push faz
arr.concat(5) // [1, 2, 3, 4, 5]
Ele une o array com algo, ele nao modifica o array principal
gera um novo array com os novos valores, já o push modifica o array principal

o que posso fazer com o concat? Posso unir um novo array por ex
arr.concat([6,7,8,9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.concat([6,7,8,9], [10, 11, 12]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr //[1, 2, 3, 4]
