---
layout: post
comments: true
date: 2021-08-18 11:35:58 -0300
author-post: Lucas Guimarães Mendes
title: Alexa, Can I Trust You?
image: ''
description: Conheça os desafios e vulnerabilidades de segurança da informação nos
  dispositivos Iot.
introduction: ''
main-class: comp
color: ''
tags:
- IoT
- security
- comp
categories: comp
twitter_text: ''

---
O artigo “Alexa, Can I Trust You?” discute a problemática da segurança e confiabilidade de dispositivos IoT (_Internet of Things_), mais especificamente sobre as IVAs (_Intelligent Virtual Assistants_), que estão cada dia mais presentes nas nossas casas, escritórios e até mesmo em nossos smartphones.

O autor inicia o artigo citando os diversos incidentes que mostraram graves vulnerabilidades desses sistemas. Em um destes, uma garota de 6 anos de idade compartilhou que gostava de bonecas e biscoitos. Isso foi o bastante para que a Alexa, assistente virtual da família, fizesse uma compra de uma casa de boneca no valor de 160 dólares e aproximadamente 2 kg de açúcar. Em outra ocasião, um jornalista, que ao comentar o caso na TV dizendo que imaginava a menina falando: ‘Alexa me dê uma casa de bonecas’, fez com que as assistentes virtuais dos telespectadores também encomendassem casas de bonecas caras.

Outro caso curioso e um tanto criativo se deu em uma tentativa de marketing do Burger King que explorou a falha da assistente virtual da Google através do comando de ativação por voz: ‘Ok, Google’, para fazer propaganda do seu hambúrguer Whopper. Em uma propaganda, o funcionário fala: ‘Ok, Google’ e em seguida fez uma pergunta sobre o hambúrguer, e imediatamente os dispositivos começaram a ler os ingredientes presentes no Wikipedia. Ironicamente, após a publicação explorando a vulnerabilidade do sistema, alguém alterou o conteúdo da Wikipedia para dizer que o produto continha cianeto e causava câncer.

Diante disso, o autor levanta algumas questões, que são discutidas durante o artigo, como: “As assistentes virtuais são seguras? Estão gravando nossas conversas? Se sim, onde estão armazenando esses dados?”, mostrando em seguida o surgimento, evolução e funcionamento do ecossistema de uma assistente virtual.

Além disso, são citados 4 vetores de ataques que podem colocar a segurança do sistema e a privacidade do usuário em risco. Esses vetores são:

**Escuta no ecossistema da Assistente Virtual**

Mesmo que os aplicativos usem comunicação com a rede de forma criptografada, a utilização de um _sniffer_ (_software_ que monitora todo o tráfego da rede) pode expor a comunicação dos mecanismos do ecossistema, ficando assim, suscetível a ataques do tipo _man-in-the-middle_. Caso queiram saber mais sobre esse tipo de ataque, temos uma bela explicação para vocês no nosso blog: ([Blog PrintF - Ataques Man In The Middle](https://comppet.github.io/PrintF/ataques-man-in-the-middle/)).

**Dispositivos compatíveis com IVA comprometidos**

Como os dispositivos conectados à IVA são em grande parte dispositivos IoT, as vulnerabilidades de segurança podem comprometer todo o ecossistema, permitindo ataques de negação de serviço (DDoS) ou até mesmo o monitoramento de todas as vozes, sons e imagens dentro do alcance do dispositivo em tempo real.

Esta última vulnerabilidade foi descoberta de uma forma assustadora, onde os pais de uma criança de 3 anos de idade se depararam com um hacker utilizando a babá eletrônica do filho para conversar com ele durante a noite. O _hacker_ também tinha o controle da câmera do dispositivo.

**Comandos de voz maliciosos**

Um terceiro ataque acontece quando o invasor utiliza os comandos de voz dos dispositivos para ter acesso às suas funções, como, por exemplo, destrancar uma porta inteligente, abrir o portão da garagem ou até mesmo fazer compras online.

Apesar das IVAs terem um módulo de treinamento por voz, alguém com a voz muito parecida com a da pessoa autorizada dificulta o reconhecimento, e assim, invasores podem conseguir acesso.

**Gravação de voz não intencional**

Por fim, vozes dentro do alcance de um dispositivo habilitado pela IVA podem ser gravadas acidentalmente e acabar transmitido para a nuvem, permitindo que outros, incluindo entidades comerciais com acesso legítimo aos dados armazenados, ou hackers que possam invadir o banco de dados, tenham acesso a essas informações.

Ao final do artigo, o autor defende que melhores testes de diagnóstico podem revelar vulnerabilidades e levar a sistemas mais confiáveis, logo, deve-se investir em pesquisas nesta área.

**Referências** 

[Alexa, Can I Trust You?](https://ieeexplore.ieee.org/abstract/document/8048642)