---
title: "Funções e Assincronismo no JavaScript"
date: "14-02-2025"
keyFilter: ["JavaScript", "Funções", "Assincronismo"]
spoiler: "Exploração de funções e do modelo assíncrono no JavaScript"
---

# Funções e Assincronismo no JavaScript

Hoje vamos focar nos pilares fundamentais da programação: funções e JavaScript assíncrono. Funções são blocos reutilizáveis de código que nos ajudam a organizar e estruturar melhor nossos programas. Já o JavaScript assíncrono é o que permite que nossa aplicação execute tarefas demoradas sem travar a interface do usuário.

## Funções

Ao programar, você quer evitar repetir código desnecessariamente. Funções ajudam nisso permitindo que escrevamos um bloco de código uma vez e o utilizemos quantas vezes for necessário com seu escopo único.

Suponhamos que você precisa calcular o desconto aplicado a um preço. Sem funções, o mesmo cálculo se repetiria diversas vezes no código. Com funções, encapsulamos essa lógica e a reutilizamos de forma mais eficiente:

```javascript
function calcularDesconto(preco, desconto) {
    return preco - (preco * desconto);
}

console.log(calcularDesconto(100, 0.1)); // 90
console.log(calcularDesconto(200, 0.2)); // 160
```

Além disso, a utilização de parâmetros permite criar diferentes contextos para cada situação. Exemplo:

```javascript
function calcularDesconto(preco, desconto, entrada) {
    let valor_de_entrada = 0;
    switch (entrada) {
        case 1000:
            valor_de_entrada = 0.1;
            break;
        case 1200:
            valor_de_entrada = 0.15;
            break;
    }
    const desconto_final = desconto + valor_de_entrada;
    return preco - (preco * desconto_final);
}
```

Funções também podem ser declaradas como Arrow Functions:

Para ativar imediatamente:

```javascript
(preco, desconto) => preco - (preco * desconto);
```

Para ativar quando chamado:

```javascript
const calcularDesconto = (preco, desconto) => preco - (preco * desconto);
calcularDesconto(100, 0.1);
```

## JavaScript Assíncrono

O JavaScript Assíncrono permite que o código continue sendo executado enquanto aguarda por uma tarefa demorada, como carregar dados de um servidor ou acessar um banco de dados.

### Diferença entre código síncrono e assíncrono:

**Código síncrono**: Executa uma linha por vez, bloqueando a execução até que cada tarefa termine.

```javascript
console.log("Início");
for (let i = 0; i < 5; i++) {} // Simula um processamento pesado
console.log("Fim");
```

**Código assíncrono**: Permite que outras partes do código rodem enquanto uma operação está pendente.

```javascript
console.log("Início");
setTimeout(() => {
    console.log("Executando depois de 2 segundos");
}, 2000);
console.log("Fim");
```

## Operações Assíncronas e o Event Loop

JavaScript é **single-threaded**, ou seja, executa uma tarefa por vez. Para lidar com operações assíncronas, ele usa o Event Loop, que gerencia a execução do código e as tarefas pendentes.

1. O código principal é executado na **Call Stack**.
2. Operações assíncronas (como setTimeout ou uma requisição) vão para a **Web API** do navegador.
3. Quando a operação termina, o resultado é enviado para a **Task Queue**.
4. O **Event Loop** verifica quando a Call Stack está livre e move as tarefas pendentes para execução.

### Métodos para trabalhar com código assíncrono

### Callbacks
Um callback é uma função passada como argumento para ser executada após uma operação assíncrona.

```javascript
function carregarDados(callback) {
    setTimeout(() => {
        console.log("Dados carregados");
        callback();
    }, 2000);
}

carregarDados(() => {
    console.log("Processamento finalizado!");
});
```

### Promises
Uma Promise representa um valor que ainda não está disponível, mas será resolvido no futuro.

```javascript
function carregarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dados carregados");
            resolve();
        }, 2000);
    });
}

carregarDados().then(() => {
    console.log("Processamento finalizado!");
});
```

### Async/Await
Uma forma moderna e mais legível de lidar com código assíncrono.

```javascript
function carregarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dados carregados");
            resolve();
        }, 2000);
    });
}

async function executar() {
    console.log("Carregando...");
    await carregarDados();
    console.log("Processamento finalizado!");
}

executar();
```

Compreender funções e assincronismo no JavaScript é essencial para construir aplicações eficientes, organizadas e responsivas.

