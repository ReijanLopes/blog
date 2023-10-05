---
title: "Construtors"
date: "2022-10-26"
keyFilter: ["Javascript"]
spoiler: "Hoje eu aprendi sobre tipo constructor e o new Set, new Map e new URL foram os que mais me chamaram a atenção"
---

# new Map e new Set, new URL

Hoje eu aprendi sobre tipo constructor e o new Set, new Map e new URL foram os que mais me chamaram a atenção, por sua facilidade e ajuda na formatação e criação de array e objetos.

## new Set

Sua manipulação é muito simples, pode simplesmente passar um array iterando ele na Set ou usando o método de adicionar dele, exemplo:

```javascript
const meuSet = new Set(...data); // Iterando o valor direto no Set
const meuSet = new Set();
meuSet.add(5); // Método para adicionar
meuSet.add(...data);
```

Mas ele tem uma característica muito especial, não permite que valores repetidos sejam passados a ele

```javascript
const data = [1, 2, 2, 2, 3, 4, 5, 5, 5];
const meuSet = new Set(...data); // valor [1,2,3,4,5]
```

## new Map()

O new Map tem as mesmas características do new Set mas ele tem a uma possibilidade de trabalhar com tagName || keyName(dependendo do nome que você use), por exemplo:

Criando filtro por funcionários, mas eu tenho só uma lista das tarefas que ele fizeram:

```javascript
const dataTasks: {employeeName: string, typeTasks: string, dateBetween: {start: date, end: date}} = []


const tasksSeparatedByEmployees = new Map()
dataTasks.map((tasks) => {
if(!tasksSeparatedByEmployees.has(tasks.employeeName)){
tasksSeparatedByEmployees.set(tasks.employeeName, dataTasks.filter((item) => {
return item.name == tasks.employeeName
}))
}
})

console.log([...tasksSeparatedByEmployees.values()])
// retorno do filtro
[
[
{employeeName: "Jose", typeTasks: string, dateBetween: {start: date, end: date}},
{employeeName: "Jose", typeTasks: string, dateBetween: {start: date, end: date}},
],
]
// lista separada com o nome de cada um dos funcionários

console.log([...tasksSeparatedByEmployees.keys()])// ["Jose", "Reijan"]

O index do Array.values e Array.keys() são correspondentes
```

## new URL

O new URL permite a pesquisa de cada rota e a pesquisa de cada um dos filtro passados

```javascript
http://localhost:3000/app?startDate=2022-07-01&endDate=2022-10-03
const url = new URL(window.location.href)
url.searchParams.get("startDate")// 2022-07-01
```

Mas essa parte e somente superficial por que o tipo constructor tem vários Métodos

### Método:

1. - add() adiciona informações a o constructor
2. - clear() limpa todo o array constructor
3. - delete() deleta todas o constructor
4. - entries() O método entries() retorna um novo objeto Iterador (Iterador) que contém um array de [valor, valor]
5. - foreach() uma forma iterar sobre o array criado pelo construtor
6. - has() Método que retorna um booleano se o valor já existe no array [value, value]
7. - keys() um novo objeto iterador resultado dos array
8. - values() um novo objeto iterador resultado dos array
9. - set() maneira de sentar elementos pro array
10. - get() pegar informações setadas.
