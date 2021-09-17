---
layout: post
comments: true
date: 2021-09-16 11:35:58 -0300
author-post: Gabriel Araujo Velasco
title: Hacking the Smart Home via Internet of Things (IoT)
image: ''
description: Ataques a dispositivos IoT.
introduction: Ataques a dispositivos IoT.
main-class: comp
color: ''
tags:
- IoT
- security
- comp
categories: comp
twitter_text: ''

---
O mercado de dispositivos IoT (Internet of Things) está crescendo rápido, o resultado dessa expansão é que as empresas prezam mais pela comodidade do que pela segurança, o que implica em dispositivos que acumulam falhas de software e hardware.

Recentemente pesquisadores da North Carolina State University (NCSU) testaram 24 dispositivos IoT para Smart Homes como câmeras, sensores de movimento, sensores de contato, campainhas de vídeo, fechaduras, portão inteligente para garagem e outros dispositivos comuns do cotidiano, dos 24 analisados, 22 foram atacados com sucesso.

Dispositivos IoT tem o que é chamado de "heart-beat channels” para enviar mensagens para o App do usuário dizendo se o dispositivo está funcionando ou não, e “on-demand channels” para acessar dispositivos sob demanda como câmeras de segurança.

É comum achar softwares ou códigos na internet que burlam as "heartbeat messages” enquanto o dispositivo é invadido, por exemplo, uma fechadura reporta que foi trancada corretamente quando na verdade não foi. Outra condição que piora a situação é que dispositivos IoT toleram o modo off-line como normal (para quando estão com bateria baixa, quedas de energia, etc), dando mais brechas para ataques.

Os pesquisadores da NCSU realizaram alguns tipos de ataque, do mais simples ao mais sofisticado.

**Ataque mais simples:**

Usando código da internet foi possível derrubar o roteador de uma casa, suspendendo a comunicação com os dispositivos.

**Ataque mais sofisticado:**

Foi usado o software open-source OpenWrt que infectou o roteador Wi-Fi fazendo com que as "heartbeat messages” passassem normalmente para os Apps que reportavam que os dispositivos estavam funcionando normalmente enquanto eram invadidos. Em alguns casos as câmeras não salvaram alguns frames de vídeo, não deixando evidências de que o ataque teria ocorrido.

**Exemplos reais de ataque em dispositivos IoT:**

O maior é conhecido como Mirai botnet, que infectou centenas de milhares de dispositivos usando-os para fazer ataques DDoS, derrubando sites para usuários legítimos. O código do Mirai foi publicado em fóruns, o que causou outros ataques semelhantes. Ataques como abuso doméstico também já foram registrados.

**Possível solução:**

Ainda é necessário muito estudo para que o problema seja totalmente solucionado, mas os pesquisadores propuseram que um bom começo seria fazer os pacotes de “heartbeat messages” e “on-demand message” do mesmo tamanho (para maior eficiência esses pacotes têm o menor tamanho possível), sendo assim o hacker (ou “cracker”, termo mais correto nesse caso) teria dificuldade em fazer um ataque silencioso.

_Referências:_

[https://cacm.acm.org/news/239502-hacking-the-smart-home-via-the-internet-of-things/fulltext](https://cacm.acm.org/news/239502-hacking-the-smart-home-via-the-internet-of-things/fulltext "https://cacm.acm.org/news/239502-hacking-the-smart-home-via-the-internet-of-things/fulltext")