---
layout: post
comments: true
date: 2020-06-19 13:07:56 -0300
author-post: Marcelo Mendonça Borges
title: Por que a cibersegurança não é mais um problema de escala-humana?
image: "/PrintF/assets/img/"
description: Entenda a importância da cibersegurança para grandes empresas, e quais
  aspectos da empresa são afetados.
introduction: Entenda a importância da cibersegurança para grandes empresas, e quais
  aspectos da empresa são afetados.
main-class: comp
color: "#EB7728"
tags:
- security
- comp
categories: comp
twitter_text: ''

---
# Por que a cibersegurança não é mais um problema de escala-humana?

### 1. Introdução

Este post faz uma resenha do artigo “Why Is Cybersecurity Not a Human-Scale Problem Anymore?”, de autoria de Gaurav Banga \[1\]. Nele, o autor começa argumentando que, recentemente, vemos várias notícias sobre falhas de cibersegurança em que grandes empresas têm seus dados vazados. Segundo o autor, a maioria de nós pensa em cibersegurança como a criação ou aprimoramento de ferramentas de defesa e sua aplicação no ambiente corporativo. Mas esse é um ponto de vista inadequado.

### 2. A superfície de ataques corporativos

Para melhor entender a natureza e a estrutura da superfície de ataques corporativos, o artigo apresenta a Figura 1.

![](/PrintF/assets/img/downloads/artigomarcelo_01_figura1.jpg)
**_Figura 1 - A superfície de ataque corporativo \[1\]._**

No eixo X, temos a infraestrutura da empresa (como servidores, bases de dados, switches, roteadores e assim por diante), aplicações, dispositivos de IoT, entre outros. No geral, tudo que está conectado na rede e que pode ter uma falha do ponto de vista de segurança.

No eixo Y, temos as formas específicas em que cada um desses componentes pode falhar, de um ponto de vista de segurança (conhecidos como vetores de ataque ou métodos de violação). Aí estão desde problemas com senhas, phishing, engenharia social, até vulnerabilidades de dia-zero e afins. Cada ponto nesse gráfico corresponde à forma como um adversário pode comprometer um componente da empresa. Observe que cada ponto é um vetor e não um simples número. Para ver isso, considere o ponto realçado na Figura 1. Essa é a ideia de que talvez a senha de um empregado da empresa para uma conta pessoal seja a mesma senha para uma de suas contas de aplicativos empresariais. Dessa forma se sua conta pessoal for violada, e sua senha for obtida, isso pode representar um risco para a empresa.

Segundo Banga, estima-se 1 milhão de contas de aplicativos corporativos possuem suas senhas compartilhadas, sendo uma forma fácil para o adversário conseguir acesso sem autorização (vide Figura 2).

![](/PrintF/assets/img/downloads/artigomarcelo_01_figura2.jpg)
**_Figura 2 - Reuso de senhas em aplicações de linha-de-negócios \[1\]._**

Os ciberdefensores não tem noção do "Vetor de Risco de Compartilhamento de Senhas". Tem-se um estudo que indica 80% das violações envolvem problemas com senhas em algum momento \[2\].

Um gigantesco gráfico X-Y representa a superfície de ataques corporativos. Em uma violação, alguns pontos desse plot são utilizados para alcançar outros e assim por diante. A Figura 3 mostra como foi a violação na empresa norte-americana Equifax.

![](/PrintF/assets/img/downloads/artigomarcelo_01_figura3.jpg)
**_Figura 3 - A violação à Equifax \[1\]._**

### 3. Qual é o nosso risco de violação?

Para um CIO (Chief Information Officer) ou CISO (Chief Information Security Officer), a questão mais importante é em quais pontos dessa superfície de ataque a empresa está em risco. Ou seja, como o mapa de calor de risco se parece e qual é o risco envolvido (Risco = Probabilidade x Impacto de cada ponto da superfície de ataque).

Deve se considerar os pontos da superfície de ataque onde tem-se vulnerabilidades. Também deve-se levar em conta a exposição devido à utilização, e priorizar ameaças reais ao invés de problemas que podem teoricamente acontecer.

Além disso, deve-se levar em conta controles atenuantes, que seria basicamente o que foi investido em segurança por parte da empresa. E considerar que os componentes da empresa (eixo X), não são igualmente importantes, e deve-se distinguir quais são os que possuem maior impacto nos negócios.

Após diversos cálculos se obtém o seguinte mapa de calor de risco na Figura 4.

![](/PrintF/assets/img/downloads/artigomarcelo_01_figura4.jpg)
**_Figura 4 - O cálculo de riscos e o mapa de calor \[1\]._**

Com o objetivo de melhorar a postura em frente a cibersegurança e diminuir o risco de violação, temos que descobrir quais ações irão trazer a maior redução de riscos. Isso requer o cálculo da ciber-resiliência da empresa, ou seja, a capacidade da empresa de limitar os impactos dos ciberataques.

### 4. Prática de cibersegurança hoje

Métodos tradicionais como avaliação de vulnerabilidades ou testes de penetração cobrem uma pequena parte da superfície de ataque da Figura 1.

Devido à falta de uma estratégia proativa viável, muito esforço e dinheiro vai sendo investido em detecção e resposta à eventos de cibersegurança, onde é observado o comportamento dos sistemas da empresa para tentar identificar alguma anomalia. Nesse caso, os falsos positivos acabam sendo um problema recorrente. Alguns times de segurança rodam listas de controle (checklists) de cibersegurança, o que acaba sendo uma estratégia inadequada.

Conversando com vários CIOs e CISOs da Fortune 1000, fica claro para o autor que que eles não possuem um inventário preciso de suas empresas (eixo X). Além disso, muitos atributos de segurança (eixo Y) são omitidos dos checklists por serem difícil de serem mensurados. No geral, considerando o que foi dito, checklists de cibersegurança levam a uma falsa sensação de segurança.
Por fim, um mal entendimento dessa massiva superfície de ataque resulta em desperdício, frustração e ansiedade. Percebe-se que existe uma dificuldade de calcular a diminuição do risco em relação ao que se é investido. Novos produtos são lançados sem se pensar muito sobre a cibersegurança.

### 5. Ensino de cibersegurança

É importante notar que existe uma grande fenda entre os requerimentos para profissionais de segurança que podem entender e enfrentar o desafio de lidar com uma possivelmente ilimitada superfície de ataque. Um estudo recente apontou que nenhum dos 10 melhores cursos de Ciência da Computação requerem uma matéria de cibersegurança para se formar \[3\] . Nós não estamos ensinando os futuros tecnólogos, como desenvolver e criar sistemas ciber-resilientes.

### 6. Chamado para Ação

Como disciplina, o cientista da computação deve começar a pensar na cibersegurança como um problema probabilístico de otimização de risco. Este autor já realizou algumas pesquisas para descobrir e quantificar a postura de segurança cibernética no espírito deste artigo.

Muita pesquisa precisa ser feita para entender os princípios do design de sistemas distribuídos com ciber-resiliência e a viabilidade de controles aprimorados para a ciber-resiliência que atendem aos sistemas legados.

Os educadores de Ciência da Computação devem reavaliar o currículo do curso para preparar melhor os alunos para as realidades de cibersegurança destacadas no artigo de Banga.

## Referências

\[1\] Banga, G. “Why Is Cybersecurity Not a Human-Scale Problem Anymore?”. In: Communications of the ACM, 3(4), pp. 30-34, abril de 2020. DOI: 10.1145/3347144. Disponível eletronicamente em: [https://cacm.acm.org/magazines/2020/4/243625-why-is-cybersecurity-not-a-human-scale-problem-anymore/fulltext](https://cacm.acm.org/magazines/2020/4/243625-why-is-cybersecurity-not-a-human-scale-problem-anymore/fulltext "Why Is Cybersecurity Not a Human-Scale Problem Anymore?")

\[2\] Verizon. Data Breach Investigations Report, 2017. Disponível eletronicamente em: [https://vz.to/2Stn2R4](https://vz.to/2Stn2R4 "Verizon. Data Breach Investigations Report, 2017").

\[3\] Syed, S. CloudPassage blog: U.S. universities get "F" for cybersecurity education, 2016. Disponível eletronicamente em: [http://bit.ly/2OBIkLr](http://bit.ly/2OBIkLr "U.S. universities get \"F\" for cybersecurity education, 2016").