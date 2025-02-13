---
title: "JavaScript e ECMAScript"
date: "11-02-2025"
keyFilter: ["JavaScript", "ECMAScript", "Variáveis"]
spoiler: "Entenda como let e const mudaram o escopo no JavaScript"
---

# JavaScript e suas evoluções

JavaScript é uma linguagem de programação amplamente utilizada como fullstack, tendo como papel central o desenvolvimento front-end. Atualmente, é a principal linguagem para tornar páginas web interativas. Apesar de ser considerada "jovem" em comparação com outras linguagens bem estabelecidas, tornou-se extremamente popular devido à sua facilidade de aprendizado, pois combina boas ideias de várias linguagens de programação. Por exemplo, reúne a flexibilidade e dinamismo do Python, a estrutura baseada em funções do Lisp e elementos de orientação a objetos presentes em linguagens mais tradicionais.

## ECMAScript 2015 e o controle de escopo

Uma das versões mais importantes para o JavaScript foi o ECMAScript de 2015, que trouxe melhorias significativas, como um controle mais eficiente do escopo das variáveis ao introduzir let e const.

Antes dessa atualização, o JavaScript utilizava apenas var para declarar variáveis, o que poderia gerar problemas de escopo. Uma variável declarada com var tem escopo de função ou global, independentemente de onde for definida, tornando-se acessível em todo o código. Isso dificultava a organização e o controle sobre onde uma variável poderia ser acessada ou modificada.

### Exemplo com var:

```javascript
function example() {
  var example1 = "Exemplo 1";
  // `var example1` pode ser acessada aqui
}
console.log(example1); // Funciona, pois `var` ignora o escopo de função.
```

Para resolver esses problemas, let e const foram introduzidos:

- let: permite alterar o valor da variável e respeita o escopo de bloco {}.
- const: mantém um valor constante, também respeitando o escopo de bloco.

### Exemplo com let e const:

```javascript
function example() {
  let example1 = "Exemplo 1";
  const example2 = "Exemplo 2";

  // `let example1` e `const example2` podem ser usados aqui
}
// Fora da função, `example1` e `example2` não existem
```

## Escopo de bloco no JavaScript

Além disso, o JavaScript passou a respeitar o escopo de bloco, delimitado por chaves {}.

### Regras para variáveis em escopo de bloco:

- Variáveis declaradas com let e const: só existem dentro do bloco onde foram criadas.
- Variáveis declaradas com var: não respeitam o escopo de bloco, permanecendo acessíveis fora dele, desde que não estejam dentro de uma função.

### Exemplo prático:

```javascript
{
  let blocoVar = "Visível apenas aqui";
  const blocoConst = "Também visível apenas aqui";
  var blocoVarGlobal = "Ainda acessível fora do bloco";

  console.log(blocoVar); // Funciona
}
console.log(blocoVarGlobal); // Funciona
// console.log(blocoVar); // ReferenceError
// console.log(blocoConst); // ReferenceError
```

Com essas mudanças, JavaScript tornou-se ainda mais robusto, eficiente e seguro para o desenvolvimento moderno de aplicações.

