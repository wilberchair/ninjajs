JS NO BROWSER

Como incluir js no nosso browser?

Existe uma tag chamada script onde adicionamos o arquivo na propriedade src. Ou colocamos nosso script dentro desta tag

O javascript pode ser incluído em qualquer parte do nosso html, tanto no head quanto no body. No exemplo vamos colocar a tag no head para o script ser carregado antes do conteúdo ser iniciado.

Antigamente era mais correto os scripts ficarem no head pois era mais comum a lógica ficar em cima.
 Mas com o tempo, com a quantidade de scripts que precisavar sem adicionados, o site começava a perder performance, pq o browser irá baixar todos aqueles scripts, ler eles pra depois renderizar o site

Então vamos usar a tag script no final do body

O recomendado é utilizar scripts externos, utilizando a propriedade src

Quando fazemos assim, o script vai ser lido e vai ficar na memória, então nas prox vezes que este site for carregado, ele já terá o script no cache