---
layout: post
comments: true
date: 2021-09-10 18:14:39 -0300
author-post: Dahlan Pereira Gardim
title: Deep Learning Speeds MRI Scans
image: ''
description: Demonstrando o potêncial da Inteligência Artificial na área da saúde.
introduction: Demonstrando o potêncial da Inteligência Artificial na área da saúde.
main-class: comp
color: ''
tags: []
categories: ''
twitter_text: ''

---
### Resenha

No artigo "Deep Learning Speeds MRI Scans", o autor Paul Marks expõe que o desenvolvimento tecnológico e o progresso científico recentes abriram um mar de possibilidades para se explorar técnicas em exames de imagem, mais especificamente a partir dos anos 70, onde foi inventado o Exame de Ressonância Magnética, sigla em inglês MRI.

Em primeiro lugar, vale destacar, que a técnica de MRI trouxe uma vantagem em relação a suas predecessoras, como o Raio X, por ser menos radioativa. A ideia do MRI basicamente consiste em analisar o comportamento de ressonância dos átomos de hidrogênio na água e gordura dos tecidos corporais. Isso possibilitou identificar condições como: lesões, tumores e alterações de fluxo sanguíneo por todo o corpo, e, de forma mais segura ao ser humano.

Porém, desde a invenção desta técnica, surgiu-se a necessidade de combater um problema um tanto inconveniente ao seu respeito, isto é, o processo é demorado, e não bastasse isso, é desconfortável. Nesse sentido, para fazer com que um processo barulhento, muito apertado e estressante se tornasse mais tolerável, até mesmo por indivíduos mais sensíveis, como os claustrofóbicos, a ciência computacional trouxe uma solução promissora.

A partir de uma técnica desenvolvida junto a um especialista da _New York University_ (NYU), constatou-se que quanto mais objetos detectores, em uma forma de ‘paralelização de imagem’, mais rápido se torna o processo. Isso porque desta forma, a imagem não é tratada como um conjunto de pixeis convencional, mas ela é construída a partir dos dados de frequência e onda obtidos, o que forma um outro conjunto de dados em imagem denominado _k-space_. Assim, o problema a princípio é inspecionar nesse conjunto, quais ângulos ou perspectivas podem ser ignorados, pois conforme esperado com o uso de mais detectores, surge a questão de redundância.

A solução que vem sendo trabalhada utiliza Aprendizado de Máquina, subconjunto da Inteligência Artificial (IA). Assim sendo, o processo de escolha para decidir qual dado pode ser dispensado fica a cargo de um algoritmo, o qual cumprindo bem sua função trará um grande avanço para agilizar diagnósticos baseado em MRI’s.

Junto com a NYU, a equipe de pesquisa do Facebook está desenvolvendo esta IA _open source_, a qual já demonstrou resultados. Foram publicados em 2020, no _American Journal of Roentgenology_, exames em qualidade de diagnóstico com quatro vezes mais rapidez. De acordo com os aprimoramentos no algoritmo, alguns exames de regiões do corpo chegaram a acelerar em dez vezes.

Exemplos de aplicações como esta, onde se vê a tecnologia impactando diretamente e de forma tão decisiva em áreas como a saúde são bastante animadores, até mesmo porque em algumas situações a diferença entre um amparo efetivo e a tragédia está em questão de minutos. Conforme mencionado, o projeto é _open source_ e pode ser acessado no link:

[https://github.com/facebookresearch/fastMRI/](https://github.com/facebookresearch/fastMRI/ "https://github.com/facebookresearch/fastMRI/")

#### Referências

[Deep Learning Speeds MRI Scans.](https://cacm.acm.org/magazines/2021/4/251335-deep-learning-speeds-mri-scans/fulltext "fastMRI")