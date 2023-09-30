---
title: "Funções assincronas"
folder: "javascript"
date: "2022-09-12"
keyFilter: "Javascript"
spoiler: "Muito usado na programação para trabalhar com banco de dados"
---

O ato de **executar uma tarefa em "segundo plano"**, que por muitas vezes faz-se desnecessário o controle direto do programador do código. Usado para lidar com dados externos na **requisição para banco de dados, para ler arquivos de pastas alocadas no projeto usando fs**(File System do node.js). Para criar uma função assíncrona é muito simples, basta colocar "async" antes da função, às vezes sendo necessário o uso do "await", para fazer a função esperar a resolução da variável. Exemplos:

```javascript
async function getData() {
  const res = await fetch("http://localhost:3000/app/data");
  // esperar o valor retornar
  const data = await res.json();
  //esperarar a resposta ser tranformada para json()
  return data;
}
```

## Promese

Promise é um promessa de conexão com o banco de dados, sendo ele dividido em três estados, pendente(estado inicial), realizada(sucesso na operação) e rejeitado(falha na operação). Como é uma variável sem uma resposta imediata é necessário o uso do await(esperar), fazendo com o que a variável get tenha uma valor definido. Lidando com uma promise:

```javascript
async function dataBase() {
  const get = await fetch("URL", { method: GET });
}
```

## File System

No uso do File System em um framework como React ou qualquer outro framework voltado para o lado do cliente, é necessário colocá-lo dentro de uma função assíncrona, devido ao simples fato de que o File System não pode ser utilizado no lado do cliente. Lidando com o File System:

```javascript
async function readPast() {
  const getFiles = fs.readFilesSync(
    path.join("nameFile", slug + ".md"),
    "utf-8"
  );
}
```
