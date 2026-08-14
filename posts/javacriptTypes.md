---
title: "Tipos de Dados em JavaScript"
date: "12-02-2025"
keyFilter: ["JavaScript", "Tipos de Dados"]
spoiler: "Compreenda os diferentes tipos de dados no JavaScript e como manipulá-los corretamente."
---

# Tipos de Dados em JavaScript

Ao lidar com JavaScript, frequentemente trabalhamos com diferentes tipos de dados. Esses valores podem ser armazenados e utilizados em variáveis, e é fundamental compreender sua classificação e manipulação. Vamos explorar os **tipos primitivos**, os **objetos**, o conceito de **herança prototipal** e as **coleções baseadas em chave**. Dominar esses conceitos ajuda a escrever código mais eficiente e a evitar erros inesperados.

### Tipos Primitivos

Os tipos primitivos são valores imutáveis e armazenados diretamente na memória. Eles incluem:

- **string** – Representa textos.
` `
  ```javascript
  let nome = "Reijan";
  console.log(typeof nome); // string
  ```
` `
- **number** – Números inteiros e decimais.
` `
  ```javascript
  let idade = 25;
  let altura = 1.75;
  console.log(typeof idade, typeof altura); // number number
  ```
` `
- **boolean** – Valores true ou false.
` `
  ```javascript
  let isDeveloper = true;
  console.log(typeof isDeveloper); // boolean
  ```
` `
- **undefined** – Variáveis declaradas sem valor.
` `
  ```javascript
  let indefinido;
  console.log(typeof indefinido); // undefined
  ```
` `
- **null** – Representa a ausência intencional de valor.
` `
  ```javascript
  let vazio = null;
  console.log(typeof vazio); // object (comportamento peculiar do JavaScript)
  ```
` `
- **bigint** – Números inteiros muito grandes.
` `
  ```javascript
  let numeroGrande = 9007199254740991n;
  console.log(typeof numeroGrande); // bigint
  ```
` `
- **symbol** – Valores únicos e imutáveis, usados para identificar propriedades de objetos.
` `
  ```javascript
  let simbolo = Symbol("descricao");
  console.log(typeof simbolo); // symbol
  ```

### Objetos e Herança Prototipal

Os objetos são coleções de propriedades organizadas como pares **chave-valor**. Eles podem conter diferentes tipos de dados, incluindo funções. Além disso, o JavaScript utiliza um sistema de **herança baseado em protótipos** (*Prototypal Inheritance*), permitindo que objetos herdem características de outros.

```javascript
const pessoa = {
  nome: "Reijan",
  idade: 25,
  falar: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

pessoa.falar(); // Olá, meu nome é Reijan
```

### Objetos Nativos e Coleções Estruturadas

Além dos objetos normais, JavaScript possui **objetos nativos**, como o JSON, amplamente utilizado para armazenar e transferir dados. Também existem coleções estruturadas, como:

- **Map** – Armazena pares chave-valor, permitindo chaves de qualquer tipo.
` `
  ```javascript
  let mapa = new Map();
  mapa.set("nome", "Reijan");
  console.log(mapa.get("nome")); // Reijan
  ```
` `
- **WeakMap** – Similar ao Map, mas mantém **referências fracas** aos objetos, otimizando o gerenciamento de memória.
` `
  ```javascript
  let weakmap = new WeakMap();
  let obj = {};
  weakmap.set(obj, "Valor associado");
  console.log(weakmap.get(obj)); // Valor associado
  ```
` `
- **Set** – Armazena **valores únicos** sem chaves.
` `
  ```javascript
  let conjunto = new Set([1, 2, 3, 3, 4]);
  console.log(conjunto); // Set { 1, 2, 3, 4 }
  ```
` `
- **WeakSet** – Versão do Set com **referências fracas**.
` `
  ```javascript
  let weakset = new WeakSet();
  let obj1 = {};
  weakset.add(obj1);
  console.log(weakset.has(obj1)); // true
  ```

## Conclusão

Compreender os tipos de dados no JavaScript é essencial para escrever **código eficiente**, evitar erros e aproveitar os recursos da linguagem, como **herança prototipal** e **estruturas de dados otimizadas**.

