---
title: "Redes de computadores"
date: "2023-09-28"
keyFilter: "Engenharia de software"
spoiler: "A evolução das redes de computadores envolveu a criação dos protocolos, juntamente com protocolos de aplicação"
---

# Protocolo da internet

Durante o período da guerra fria os computadores eram centralizados, com vários terminais para uso, mas a guerra fez com que eles fossem descentralizados, para que mesmo que perdendo alguma coisa a rede continuaria funcionando, criando a arpanet,
adotando dois protocolos de defesa: o TCP/IP .
O protocolo IP criado para ser completamente descentralizado usando o IP (código único de cada máquina) como uma forma de navegar até o destino(máquina)

# Protocolos IPv4 e IPv

O tamanho comum de um IPv4 tem 64 kb sendo esse o valor máximo.

Para passar mais que o valor mostrado, então usando a fragmentação e possível

Comprimento do pacote = tamanho sendo enviado ou recebido
identificação = tamanho total do pacote
MF = indicar que é um pedaço do pacote e não um inteiro
deslocamento do fragmento = o valor do comprimento do pacote 1500 - 20 dividido pela quantidade de bits por ms que e 8

O IPv6 veio para inovar e aumentar a quantidade de rotas, passando 124 kb, tendo muito mais segurança e criptografia de informações. NAT transforma o IP de rede local para uma rede IPv6 que transforma tudo mais rápido e fácil. No IPv6 tem atribuição automática de endereços que não é indicada para servidores, firewall e impressoras

# Protocolos TCP e UDP

O TCP e o transporte confiável, nele ao controle de estado, controle de sequencia de segmentos, controle de congestionamento e por endereçamento por porta
UDP e o transporte não confiável, sendo muito simples tendo somente o endereçamento por porta e sendo extremamente simples e rápido,
Redes locais
Formada por computadores, celulares etc… Criando por meio de uma conexão física ou rede wifi para criar esse rede, divididas em 7 camadas para que ele seja criada; Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace de dados e Físicas sendo esse o modelo OSI

# Protocolos de aplicação

Temos o TCP/IP são protocolos de aplicação que ocupam as três camadas mais altas do modelo OSI, serviços de processos, locais em vídeos e browser, tendo um padrão controlando vários fluxos, quando uma imagem ou vídeo irá aparecer, executando as funções necessárias

1. - Controle de sessão
2. - Representação
3. - Criptografia
4. - Interface com os processos de usuário

# DNS, SMTP e TELNET

DNS: Necessário para gerenciar uma grande quantidade de endereços eletrônicos que são criados diariamente e muito frequentes alterados, sempre dentro de uma zona:

1. - Nome versus endereço
2. - Controle distribuído e hierárquico
3. - Encontra o endereço IP do URL
4. - Organizado por estrutura em árvore
5. - Separado por zonas
6. - Busca recursiva o alternativa recursiva: vai pelos galhos até achar o nome do site e domínio, trazendo o Ip necessário, linkando uma coisa a outra

Uma parte da informação e da uma parte Ethernet ele vem com os protocolos e calculos de entrada

Anteriormente as conexões eram diretas e ininterruptas, mas quando foi liberado para a população teve um problema, as pessoas desligam seus computadores, agora todo acesso e um para um banco de dados
Podendo ter ajustes de Timeout e tudo mais, tendo também uma lista cruzada entre servidores, mas tudo isso foi trocado pelo ISP. Sendo usado na porta 1939 para dispositivos que podem ficar desligados, fazendo uma consulta de TPC 110 para um servidor, seguindo essa sequência:

1. Autorização
2. Transações
3. Atualização

## IMAP

1. - Manipula mensagens no servidor
2. - RFC 2060
3. - TCP/143
4. - Filtros e regras para correspondências
5. - Filtros por atributos
6. - Dowload parcial de informações

## TELNET/SSH

1. - Permitindo o acesso remoto, modo terminal
2. - Comunicação bidirecional, em modo texto
3. - RFC 854
4. - TCP 23
5. - Envio caractere a caractere, ecoado pelo servidor
6. - Texto enviado sem criptografia, isso no TELNET por que no SSH agora tem, por isso o TELNET foi trocado pelo SSH
7. O SSH tem uma peculiaridade a mais usando mais RFC 4251/4252/4253, tendo um TCP de 22, tendo um padrão de comunicação assim

## MIB, SNMP e HTTP

SNPM( Simples gerenciador de protocolo de network ) Mecanismo de gerenciamento de redes, a o MIB( gerenciamento de informações base ) uma base de sistemas de gerenciamento.
Focado IOD: Object ID

## HTTP

E um hipertexto, um arquivo de texto no formato HTML, e sendo gerenciado por uma url, sempre trabalhando com um sistema Cliente-Servidor, tendo uma interpretação das mensagens por HTTP.
RFC 1945 e 2616
Formato das mensagens req/ res

### Roteamento e encaminhamento

Processo comum do encaminhamento indo por uma linha, consultando uma tabela de rotas, fazendo de maneira rapida para um processo rapido

1. - Roteamento: processo pelo qual eles montam a tabela, e mantém a tabela, organizando tudo e controlando tudo.
2. - Ele usa dois métodos
3. - Manual
4. - Automático
5. - Protocolos de roteamento
6. - Processo comum
7. - Troca de informações entre dispositivos

### Protocolos de roteamento

Ele foca no melhor local para ir pela rota, se algo der errado por uma rota, controlando o melhor caminho e desligando as rotas não usadas, se algo der errado com uma parte da rota, essa parte é abandonada e calculada uma nova rota para passagem

### Firewall, IPS e VPN

Rede (L4)
usado com regras de uso
A nova geração vão até a Rede (L7)

filtro por URL por categoria e reputação
Usuários / Políticas
Grupos
Controle de aplicações
IPS
