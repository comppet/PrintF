---
layout: post
comments: true
date: 2020-05-16T17:07:38.000+00:00
author-post: Salomão alves
title: Regressão Linear
image: "/PrintF/assets/img/"
description: Como funciona a matemática por trás do algoritmo de regressão linear.
introduction: Como funciona a matemática por trás do algoritmo de regressão linear.
main-class: comp
color: "#265AA9 "
tags:
- Comp
- Math
- ML
categories: Comp
twitter_text: ''

---
# **A matemática por trás de um dos principais algoritmos de Machine Learning**

Machine Learning (ML), ou Aprendizado de Máquina, é um termo do momento. O mundo está passando por grandes transformações, mudando de forma rápida e brusca. Coisas inimagináveis há 5 ou 10 anos atrás são corriqueiras nos dias de hoje.

Grande parte dessa mudança veio por causa do ML. Mas não se engane, os algoritmos de ML são antigos, uma vez que são teoremas estatísticos utilizados de forma automática. O ingrediente que faltava para que essa explosão ocorresse era o Big Data -- mas não iremos falar sobre isso, deixaremos para um próximo post.

O que quero trazer para vocês aqui é uma visão de como o aprendizado de máquina funciona, mostrar que não é mágica, é simplesmente matemática com uma boa dose de alto processamento (computação).

Hoje, irei falar para vocês sobre Regressão Linear (simples e múltipla), um dos algoritmos de ML mais utilizados. No decorrer deste post, irei mostrar como a parte matemática funciona.

## Introdução

### O que é:

Em estatística, Regressão Linear é uma equação para se estimar o valor de uma variável y, dados os valores de outras variáveis x’s. Ou seja, busca-se uma relação entre as variáveis que possa ser representada como uma função linear. Caso não seja uma função linear, devemos procurar por modelos de regressão não-linear.

![](/PrintF/assets/img/downloads/Screenshot from 2020-05-11 20-20-38.png)

Figura 1: exemplo de [regressão linear](https://pt.wikipedia.org/wiki/Regress%C3%A3o_linear).

Elas são usadas para o Aprendizado de Máquina Supervisionado, ou seja, o Dataset utilizado contém várias variáveis de entradas e apenas 1 variável de resposta (target).

Dentro de Aprendizado Supervisionado, os algoritmos podem ser de dois tipos: Classificação, onde o objetivo é mapear as variáveis de entrada em categorias discretas; e Regressão, capaz de mapear variáveis de entrada para alguma função contínua.

### Notações:

A notação $x^{i}$ representa os valores de entrada (‘input’ ou variáveis de entrada) e $y^{i}$ representa o valor que se quer prever (‘output’ ou variável target). Os exemplos (training set) sempre serão escritos da seguinte forma: ($x^{i}$, $y^{i}$) tal que $1\\leq i\\leq m$. Portanto, o _i_ é o índice no training set e m é a quantidade de dados que existe. Já o _X_ representa o conjunto dos valores inputs, a mesma lógica vale para _Y_ em relação ao valores outputs.

Em alguns casos, haverá mais de uma variável de entrada. Assim, para representar cada coluna, usaremos seu número subscrito no _x_: $x_{j}^{i}$, sendo que o $1\\leq i\\leq m$ e $1\\leq j\\leq n$. Onde _m_ representa a quantidade de exemplos e _n_ representa a quantidade de variáveis de entrada.

### Hipótese:

Basicamente, o Aprendizado Supervisionado tem como objetivo, dado um training set, aprender uma função h: $X\\rightarrow Y$, onde _h(x)_ será um bom preditor para _y_. Por diversas razões, chamamos essa função _h_ de Hipótese.

![](/PrintF/assets/img/downloads/Screenshot from 2020-05-11 20-20-27.png)

Figura 2: Representação gráfica da [função h](https://www.coursera.org/learn/machine-learning).

### Cost Function

Para mensurar o quão precisa esta nossa função de hipótese, utilizamos a Cost Function:

$J(\\\\Theta) = \\frac{1}{2_m}_ \\sum_{_=1}{m\\left ( h_{\\Theta}\\left ( x^{(i} \\right ) _{(i)} \\_right )^{2}$

Nosso objetivo é achar os melhores parâmetros $_\\Theta$, tal que $J(\\Theta)$ seja o menor possível.

Forma Matricial:

Uma importante e interessante forma de pensar nessas funções é na sua forma matricial. Não se engane, ao traduzir essas equações da linguagem natural para linguagem de programação, não devemos utilizar o comando _for_ demasiadamente*,* uma vez que seu gasto computacional é muito grande, já que utilizamos grandes datasets. Por isso, sempre colocamos os _X_, _Y_ e os _thetas,_ em vetores/matrizes. Assim, utilizamos a multiplicação de matrizes ao nosso favor, reduzindo o tempo e o custo computacional gasto.

Linguagens como MATLAB e Octave, assim como a biblioteca NumPy do Python foram criadas com intuito de facilitar esse tipo de operação.

## Regressão Linear Simples

Sempre que houver apenas 1 variável de entrada e 1 variável de resposta usaremos esse tipo de regressão.

### Hipótese:

Como já explicado acima, usaremos a Função de Hipótese para criar a linha de regressão igual mostrado na Figura 1. A função _h_ é definida como: $h_{\\Theta} = \\Theta_{0} + \\Theta _{1}*x$. Veja, essa equação sempre criará uma reta, sendo $\\Theta_{0}$ o coeficiente linear e o $\\Theta _{1}$ o coeficiente angular.

### Cost Function:

Já a função de custo é definida da seguinte forma:

$J(\\Theta_{0}, \\Theta_{1}) = \\frac{1}{2*m} * \\sum_{i=1}^{m}\\left ( h_{\\Theta}\\left ( x^{(i)} \\right ) - _{(i)} \\right )^{2}$

## Regressão Linear Múltipla

Sempre que houver apenas _n_ variáveis de entrada e 1 variável de resposta usaremos esse tipo de regressão.
