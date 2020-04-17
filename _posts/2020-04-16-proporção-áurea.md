---
layout: post
comments: true
title: Dicas para melhorar a performance dos sites.
date: 2020-04-16 03:00:00 +0000
image: "/PrintF/assets/img/"
description: Melhore a experiência do usuário e aumente as taxas de conversão do seu
  site através dessas simples dicas.
main-class: dev
color: "#EB7728"
tags:
- dev
categories: 
twitter_text: 
author-post: Fabrício Ziliotti
introduction: Proporção da matemática muito famosa presente em logomarcas, pinturas,
  esculturas e até mesmo na natureza.

---
# Introdução

## Dicas simples e rápidas

 1. **CSS System Font Stack:** Uma boa estratégia de Font-Loading é não carregar nenhuma fonte, Utilizando as fontes nativas como a Roboto para Android, Ubuntu para Linux, Segoe UI para Windows..

    ```css
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Ubuntu",
        "Helvetica Neue", "sans-serif";
    }
    ```
 2. **Conhecer e compreender as principais métricas:** Conheça as métricas de performance, como FCP, FMP, TTI, FID e outras siglas importantes.
    * [Saiba mais sobre as métricas de renderização](https://speedcurve.com/blog/rendering-metrics/)
    * [Referências de auditoria do LightHouse](https://developers.google.com/web/tools/lighthouse/audits/)

    > **First Contentful Paint:** é a renderização do conteúdo, podendo ser texto ou imagens. Para compensar as deficiências do First Contentful Paint, o auditador [Lighthouse](https://github.com/GoogleChrome/lighthouse) do Chrome tenta capturar quando o conteúdo principal é renderizado para o usuário.
    > **First Meaningful Paint:** A primeira pintura significativa é essencialmente a pintura efetuada após a maior alteração de layout da parte inicialmente visível da página inicial e o carregamento das fontes da Web.

    > **Time to Interactive:** Tempo até interatividade é definido como o momento em que o layout se estabilizou, as principais fontes Web estão visíveis, e o encadeamento principal está com disponibilidade suficiente para aceitar entradas do usuário.
 3. **Saiba diferenciar o impacto de arquivos:** É legal entender que nem todos os bits afetam da mesma forma o carregamento de seu site. Por exemplo: 100KB de um arquivo Javascript que vai precisar passar pelas etapas "parse, compile e execute" irá demandar mais do dispositivo do que 100KB de uma imagem que passara pelas etapas "decode, rasterize e paint".
 4. **Otimização de imagens e svgs:** Sempre otimize imagens e svgs (sejam no formato jpg, jpeg, png, svg). Esses arquivos geralmente são mais pesados e exercem grande impacto no carregamento de sites e isso é muito mais sentido em celulares com conexões lentas. Para isso você pode usar o [TinyPNG](https://tinypng.com/)
 5. **Use Sprites:** Em alguns casos é uma boa usar Sprites para diminuir o número de requisições a imagens de seu site. O Google utiliza isso em sua página principal. Sprite basicamente é uma imagem contendo varias outras que você pode utilizá-la em varios elementos do site e selecionando cada "subimagem" de acordo com sua posição na imagem maior.
 6. **Inline de Recursos:** Ao invés de criar muitos links para arquivos externos e isso acarretar em mais uma requisição ao servidor, você pode colocar o conteudo desses arquivos no próprio HTML. Por exemplo scripts pequenos em javascripts que sempre serão carregados na página principal.
 7. **Concatenar arquivos:** Uma boa forma de diminuir o número de requisições é a concatenação de arquivos. Um exemplo simples é o que pré-processadores CSS fazem, você desenvolve seu css em módulos que depois você irá importar em um arquivo principal de seu pré-processador, na hora do build, esses arquivos que você programou separadamente irão se juntar em um unico arquivo css.
 8. **Cache do navegador:** Uma das formas mais interessantes e trabalhosas é o controle do cacheamento dos arquivos do site. Isso significa basicamente definir os arquivos que não devem ser baixados pelo cliente depois de terem sido baixados a primeira vez, isso permite com que o seu site carregue muito mais rápido em celulares e sites que acessam seu site frequentemente. Existem diversas maneiras de configurar o cache, pode ser utilizando os service workers de PWAs, configurar o arquivo '.htaccess' entre outras técnicas.
    * [Mais sobre htaccess...](https://www.codigofonte.com.br/artigos/confira-20-dicas-e-truques-extremamente-uteis-do-htaccess)
    * [Mais sobre service-workers...](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)
 9. **Habilitar GZIP no servidor:** Essa técnica faz a compactação dos arquivos antes de enviá-los ao navegador do visitante de seu site, reduzindo assim o tamanho dos arquivos e diminuindo o tráfego de rede. Este recurso é muito útil e deve ser usado sempre que possível. Além de economizar a largura de banda do servidor, melhora o tempo de carregamento das páginas do site. Além disso, os buscadores da Web indexaram a sua página mais rapidamente.

    > Você também pode habilitar o gzip em seu arquivo de configurações '.htaccess'
10. **Entender os recursos que bloqueiam a renderização:**
    O CSS e JS são os reis do bloqueio. Enquanto o CSS não baixa, ele não desenha nenhuma tag na tela. E enquanto o JS não baixa e executa, nenhuma tag abaixo dele é renderizada. Sabendo disso você se motiva a implementar os mecanismos para melhorar a performance. 😎
11. **Compreender e testar a usabilidade em vários dispositivos:** Além de verificar se seu site está responsivo como fazemos no front-end, devemos lembrar que a performance dele varia muito de celular para celular. Por exemplo, o processamento do javascript em um celular mediano pode ser varias vezes MENOR que em celulares mais atuais e caros.
12. **Deferir o CSS não usado ou não principal:** Carregue o css mais importante primeiro e depois carregue o css não utilizado frequentemente.
    * [Como realizar o deferimento?](https://developers.google.com/web/tools/lighthouse/audits/unused-css)

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
        /* Critical CSS here. */
        </style>
        ...
    </head>
    </html>
    ```
13. **Utilize plugins e sistemas de auditoria para verificação da performance:**
    Eles vão facilitar a sua vida na hora de verificar a performance do seu site, verificar se você não deixou nada de fora e aprender mais sobre Web Performance. 😉😉
    * [LightHouse](https://developers.google.com/web/tools/lighthouse/)
    * [WepPage Test](https://www.webpagetest.org/)
    * [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
    * [GTMetrix](https://gtmetrix.com/)
14. **Modelo RAIL de performance:** Ultimamente estou dando uma estudada nesse modelo para melhorar a Experiência do Usuário em meus sites e pequenos projeto, pode ser uma boa para você também! 😃
    Resumidamente:
    * **R** esponse (Tempo de resposta em menos 100ms)
    * **A** nimation (60fps = 16ms por frame)
    * **I** dle (estado intermediário, blocos de 50ms)
    * **L** oad (First Meaningful Paint o mais rápido possível)
15. **Usar a técnica Code Splitting:** Isso significa que você deve enviar o que a pessoa precisa apenas quando ela precisa. Isso é feito através de Dynamic Importing.
16. **Remover o CSS não utilizado:** Essa é legal👌. Você pode utilizar a ferramenta [UnCSS](https://github.com/uncss/uncss) para remover os seletores CSS que não são utilizados.
    Resumindo funcionamento do UNCSS:
    * Os arquivos HTML são carregados pelo jsdom e o JavaScript é executado.
    * Todas as folhas de estilo são analisadas pelo PostCSS.
    * document.querySelector filtra os seletores que não são encontrados nos arquivos HTML.
    * As regras restantes são convertidas de volta para CSS.
17. **Web Fonts:** Estudar WebFonts e compreender o impacto que o carregamento de fontes tem em sua aplicação web.
    * Esse cara é muito bom e ja publicou diversos artigos sobre o tema, vale a pena a leitura -> [site do Zach](https://www.zachleat.com/web/fonts/)
18. **Lazy Load de Imagens:** Segundo um post de Rahul NanWani [aqui](https://imagekit.io/blog/lazy-loading-images-complete-guide/), "A ideia básica de carregamento lento é simples - adiar o carregamento de qualquer coisa que não seja necessária no momento. Para imagens, isso geralmente se traduz em qualquer imagem que não seja visível para o usuário na frente, pode ser carregada com preguiça. À medida que o usuário rola a página, os placeholders de imagem começam a entrar na viewport (parte visível da página da Web). Acionamos a carga dessas imagens quando elas se tornam visíveis."
19. **Conhecer os atributos defer e async da tag script**

    Estudar WebFonts e compreender o impacto que o carregamento de fontes tem em sua aplicação web.

    Se nenhum atributo estiver presente, o script será baixado e executado de forma síncrona e interromperá a análise do documento até que ele tenha terminado a execução (comportamento padrão). Scripts são baixados e executados na ordem em que são encontrados.

    O atributo defer transfere o script enquanto o documento ainda está analisando, mas aguarda até que o documento termine a análise antes de executá-lo, equivalente à execução dentro de um ouvinte de evento DOMContentLoaded. adiar scripts será executado em ordem.

    O atributo async faz o download do script durante a análise do documento, mas pausará o analisador para executar o script antes de concluir a análise. scripts assíncronos não serão necessariamente executados em ordem.

    > os dois atributos só devem ser usados ​​se o script tiver um atributo src (ou seja, não um script in-line).

    ```html
    <script src="myscript.js"></script>
    <script src="myscript.js" defer></script>
    <script src="myscript.js" async></script>
    ```

# Bônus

Uma dica interessante é o estudo dos [Web Browsers](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/ "O que é um browser"). Pois entendendo como ele funciona e suas principais etapas de [construção, layout e gravação da árvore de renderização](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=pt-br "Construção, layout e gravação da árvore de renderização"). 

# Conclusão

Existem muitas outras técnicas e elas variam de acordo com a stack que você utilizou no desenvolvimento da aplicação, mas em geral essas dicas se aplicam a maioria de projetos.

Além disso, uma boa prática é utilizar auditadores como:

* [LightHouse](https://developers.google.com/web/tools/lighthouse "Lighthouse")
* [GTMetrix](http://gtmetrix.com/ "GtMetrix")
* [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/ "Speed Insights")