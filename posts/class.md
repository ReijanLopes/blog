---
title: "Classes em JavaScript"
date: "19-02-2025"
keyFilter: ["JavaScript", "POO", "Classes"]
spoiler: "Entenda como funcionam as classes em JavaScript, sua sintaxe e principais recursos."
---

# Classes

As classes são fundamentais na programação porque permitem organizar e estruturar o código de forma modular (sistema em partes menores e independentes), tornando-o mais fácil de entender, reutilizar e manter. Elas agrupam atributos (dados) e métodos (comportamentos) em uma única unidade, representando objetos do mundo real dentro do software. Isso facilita a modelagem de sistemas complexos, garantindo que cada parte do código tenha uma função bem definida e evitando repetições desnecessárias.

Além disso, as classes são amplamente utilizadas devido a recursos como herança, encapsulamento e polimorfismo, que proporcionam maior flexibilidade e segurança no desenvolvimento. Com a herança, é possível criar novas classes baseadas em outras, reaproveitando código e simplificando a manutenção. O encapsulamento restringe o acesso direto a determinados atributos, protegendo os dados e garantindo que as regras do sistema sejam seguidas. Já o polimorfismo permite que diferentes classes compartilhem métodos com o mesmo nome, mas com implementações distintas, aumentando a versatilidade do código.

## Sintaxe básica da classe

```javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  exibirInfo() {
    console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
  }
}
```

Para criar um novo objeto dessa classe, usamos new:

```javascript
let item = new Produto("Notebook", 3500);
item.exibirInfo(); // Produto: Notebook, Preço: R$3500
```

O método constructor é executado automaticamente quando a classe é instanciada, inicializando os valores do objeto.

## Classes São Funções

Internamente, uma classe em JavaScript é uma função especial:

```javascript
console.log(typeof Produto); // function
```

Isso acontece porque a classe é apenas uma forma mais estruturada de definir uma função construtora e seu protótipo:

```javascript
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.exibirInfo = function () {
  console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
};

let item = new Produto("Tablet", 1500);
item.exibirInfo(); // Produto: Tablet, Preço: R$1500
```

Ambas as abordagens geram um comportamento semelhante, mas a sintaxe de classe traz mais recursos.

## Expressões de Classe

Assim como funções, classes podem ser atribuídas a variáveis:

```javascript
let Pessoa = class {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};

let aluno = new Pessoa("Mariana");
aluno.falar(); // Oi, meu nome é Mariana
```

## Getters e Setters

Podemos definir getters e setters para controlar o acesso a propriedades:

```javascript
class Carro {
  constructor(modelo) {
    this._modelo = modelo;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(novoModelo) {
    if (novoModelo.length < 3) {
      console.log("Nome muito curto!");
      return;
    }
    this._modelo = novoModelo;
  }
}

let carro = new Carro("Fusca");
console.log(carro.modelo); // Fusca
carro.modelo = "Fi"; // Nome muito curto!
```

## Campos de Classe

Podemos definir propriedades diretamente dentro da classe, sem precisar do constructor:

```javascript
class Loja {
  nome = "TechStore";

  exibirNome() {
    console.log(`Bem-vindo à ${this.nome}`);
  }
}

let minhaLoja = new Loja();
minhaLoja.exibirNome(); // Bem-vindo à TechStore
```

## Métodos Vinculados

Se passarmos um método para outro contexto, ele pode perder a referência ao objeto original. Para evitar isso, usamos arrow functions:

```javascript
class Botao {
  constructor(label) {
    this.label = label;
  }

  clique = () => {
    console.log(`Botão ${this.label} clicado`);
  };
}

let botao = new Botao("Enviar");

setTimeout(botao.clique, 1000); // Botão Enviar clicado
```

---

Fonte: [Javascript.Info](https://javascript.info/class)
