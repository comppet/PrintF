## BLOG PrintF - [Link Site](https://comppet.github.io/PrintF/)


## Introdução - BlogPrintf

Esse é o repositório do blog do compPet, basicamente é nosso projeto onde postamos conteúdo interessante e podemos compartilhar conhecimento.
Temos liberdade para escolher o assunto, mas geralmente é relacionado a tecnologia. Também tiramos ideias do [Communications of CACM](https://cacm.acm.org/)


<hr/>

## Tecnologias utilizadas

Para realizar a transformação dos arquivos no formato mardown - [leia sobre aqui](https://daringfireball.net/projects/markdown/syntax) - em páginas estáticas, estamos utilizando a tecnologia [Jekyll](https://jekyllrb.com/).

Para criação e edição do conteúdo do blog, usamos o [Forestry](https://forestry.io/), que é basicamente se conecta com esse nosso repositório e através de commits consegue atualizar, adicionar e remover conteúdos do site como as postagens no nosso caso.


**Edição do código**

Se for necessário adicionar alguma lógica, é importante estudar um pouco mais a fundo o funcionamento do Jekyll e sua estrutura de pastas, não é muito recomendado alterar essa estrutura sem conhecimento da ferramenta.

Para estilizar o projeto (página inicial e blogposts), você pode editar os arquivos presentes na pasta `src/styl/*.styl`, esse arquivo '.styl' nada mais que que ó formato do pre-processador [Stylus](http://stylus-lang.com/), que basicamente facilita um pouco mais na criação dos arquivos css e possui uma sintaxe fácil.

<hr/>

## Futuro

Se no futuro tivermos que migrar a tecnologia para outra como os frameworks React (Gatsby, Next), frameworks Vue (Nuxt), Hugo ou até mesmo wordpress, os arquivos markdown presente na pasta `_posts` poderão ser reutilizados facilmente!
