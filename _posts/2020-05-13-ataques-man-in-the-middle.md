---
layout: post
comments: true
date: 2020-05-13 16:55:52 -0300
author-post: Lucas Guimarães Mendes
title: Ataques Man In The Middle
image: "/PrintF/assets/img/"
description: Conheça as características, formas de realizar, identificar e se defender
  de um dos ataques mais utilizados por hackers! O MAN IN THE MIDDLE!
introduction: Conheça as características, formas de realizar, identificar e se defender
  de um dos ataques mais utilizados por hackers! O MAN IN THE MIDDLE!
main-class: security
color: blue
tags:
- security
- comp
categories: security
twitter_text: ''

---
## Introdução

O ataque *Man in the Middle (MITM)* - ou, em Português, homem no meio - é um ataque bastante utilizado por *hackers* com o fim de obter informações do alvo sem que ele perceba. Em sua maior parte, esses ataques são usados para obter dados bancários, logins e senhas de e-mails e qualquer tipo de dado sensível de usuários ou empresas.

Além disso, este ataque explora diferentes vulnerabilidades, como por exemplo, redes de internet abertas ou sem a proteção adequada, protocolos de comunicação sem camada de segurança, pacote de dados sem criptografia como http e ftp, entre outras.

## Conceito

Formalmente, ataques MITM permitem aos atacantes interceptar, enviar e receber dados que chegam e saem do dispositivo alvo sem serem detectados até que a transação esteja completa. Ou seja, o MITM é um nome genérico para qualquer ataque virtual em que alguém fique entre o alvo e a atividade realizada, entre o alvo e uma transação bancária online, por exemplo.

## Contexto de utilização

Normalmente, este tipo de ataque é utilizado após uma tentativa sem êxito de infectar a máquina com vírus, o que por sua vez é menos complexo e mais rápido do que um ataque MITM. Além disso, estes ataques são muito eficientes e difíceis de serem detectados, o que os colocam entre os principais ataques utilizados por *hackers*.

Existem alvos mais visados para este ataque como sites de compras online, sites de serviços bancários, sites que exigem login e senha e redes Wi-Fi, justamente por  conterem informações críticas.

A forma como o ataque é feito pode ser bastante diversificada, porém duas etapas principais e bem comuns são a interceptação e a descriptografia.

## Interceptação

Essa etapa consiste em interceptar o tráfego da rede antes que ele chegue ao destino. Algumas ferramentas e métodos são essenciais para isso e serão expostos logo abaixo.

* **IP Spoofing**

Os dados transmitidos pela internet são divididos em pacotes, e cada pacote possui um cabeçalho contendo informações sobre ele, incluindo os endereços IP’s de origem e destino.

O atacante falsifica o endereço IP de origem dos pacotes a serem enviados para a vítima, assim ele passa a ser uma fonte confiável para estabelecer a comunicação com o usuário ou servidor.

![](/PrintF/assets/img/downloads/imagem1.png)

Esse método também é utilizado para realizar ataques DDOS, que consistem em sobrecarregar servidores com grande quantidade de pacotes de dados.

* **ARP Spoofing - Também conhecido como envenenamento de cache ARP (*Address Resolution Protocol*)**

Quando um pacote é enviado de um *host* para outro, o endereço MAC deve ser indicado no cabeçalho, que é um identificador fixo e exclusivo atribuído a cada placa de rede. Para que o pacote seja aceito, é verificado se o MAC especificado faz referência ao endereço IP do destinatário.

O objetivo, neste caso, é associar o MAC do atacante ao endereço IP de um *host* de destino e assim obter os dados.  Este tipo de ataque geralmente é utilizado em redes locais.

![](/PrintF/assets/img/downloads/imagem2.png)

* **DNS Spoofing - Também chamado de envenenamento de cache DNS (*Domain Name System*)**

Os servidores DNS permitem estabelecer nomes para os endereços IP. Desta forma, não é necessário que o usuário precise lembrar dos endereços IP de cada site que pretende visitar, acelerando o processo de navegação na internet.

O ataque consiste em alterar os endereços IP dos servidores DNS da vítima para apontar para servidores maliciosos criados pelo atacante, assim, a vítima é redirecionada para um site falso ao invés do que ela realmente desejaria entrar.

![](/PrintF/assets/img/downloads/imagem3.png)

* **Sniffer de Rede**

Esse *software* é usado com frequência para monitorar e analisar o tráfego de rede para detectar problemas e manter um fluxo eficiente. Porém pode ser utilizado para obter dados não permitidos, já que grande parte do tráfego da rede passa por ele.

![](/PrintF/assets/img/downloads/imagem4.png)

## Descriptografia

Geralmente os dados obtidos na etapa de interceptação englobam ferramentas para dificultar o seu acesso de forma legível para os humanos, ou seja, estão criptografados. Para isso, os atacantes utilizam técnicas de descriptografia. Algumas delas estão citadas abaixo.

* **Falsificação de HTTPS (Hyper Text Transfer Protocol Secure)**

O atacante instala um certificado de segurança raiz falsificado para que o navegador do alvo ache que é um certificado confiável. Como o navegador confia nele, ele fornece a chave de criptografia necessária para decifrar os dados enviados e assim o atacante pode ler os dados, criptografá-los novamente e enviá-los para o destino sem levantar suspeitas de que a comunicação foi interceptada.

* **Sequestro de SSL**

Quando o usuário se conecta a um site, o navegador primeiramente é conectado à versão HTTP do site e depois é redirecionado para a versão HTTPS, que por sua vez é responsável pelo processo de encriptação do site. O novo servidor, agora seguro, fornece ao navegador um certificado de segurança.

No sequestro de SSL, o ataque é realizado antes do site ser passado para o HTTPS e assim o atacante pode redirecionar o tráfego para que ele passe por seu computador primeiro.

## Ferramentas

Existem diversas ferramentas que podem ser usadas para realizar ataques MITM, algumas delas são:

* WireShark
* Ettercap
* Cain e Abel
* Bettercap
* Máquinas virtuais

## Como identificar e se proteger

Apesar de serem extremamente difíceis de serem identificados, há alguns sinais que podem ser um rastro deixado por esse ataque. Alguns destes sinais são atrasos longos no carregamento de páginas sem motivo aparente e URLs trocando de HTTPS para HTTP. Outra forma de identificar é verificar a tabela ARP, isso pode ser feito com um *sniffer* de rede, por exemplo.

Para se proteger, recomenda-se a utilização de VPN (*Virtual Private Network*), que por sua vez é capaz de dar uma segurança bem maior para os dados. Porém em casos de ataques do tipo SSL a solução é chamada de HSTS (*HTTP Strict Transport Security*), uma política de segurança que força navegadores e sites a se conectarem por meio do protocolo HTTPS.

## Referências

[O que é um Ataque Man-in-the-Middle?](https://www.kaspersky.com.br/blog/what-is-a-man-in-the-middle-attack/462)

[Ataques Man-in-the-middle: o que são e como evitá-los](https://www.avg.com/pt/signal/man-in-the-middle-attack)

[O que é IP Spoofing e como se proteger dele](https://www.binarionet.com.br/2019/07/22/o-que-e-ip-spoofing-e-como-se-proteger-dele/)