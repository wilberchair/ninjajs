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
