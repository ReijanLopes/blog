---
title: "File System (fs)"
folder: "node"
date: "2022-09-19"
keyFilter: "Node"
spoiler: "Módulo do node.js que permite o trabalhar com arquivos"
---

# File System do node.js

Módulo do node.js que **permite trabalhar com pastas e arquivos**, com o FS é possível **ler, criar, atualizar, deletar e renomear arquivos**, **não sendo possível a sua utilização no lado do cliente**, mas sua utilização no frontend é possível por meio das funções assíncronas. Todas as funções do fs **tem uma versão assíncrona e todas elas são tem um tipo característico**.

## Exemplo de função assíncrona do fs:

```javascript
appendfilesync();
// Todos a  versões assíncrona tem o final sync
```

### Tipos:

```javascript
    fs.<NameFunction>("namePasta", (erro) => {
        //trabalhe com seu erro aqui
    })
```

Acredito que seja melhor aprender vendo como se é utilizado na prática, vamos abordar os usos mais comuns, os 20% que todo mundo precisa saber, e provavelmente mais pra frente vamos aprofundar porque esse que voz escreve ama backend, os exemplos a seguir se baseiam na premissa que o código foi escrito no backend. Exemplos:

## Criando uma pasta:

### **mkdir():**

```javascript
fs.mkdir("NameFolder", (erro) => {
    if(erro) {
        res.status(500).json(message: erro)
    }
    else{
        res.status(200).json(message: "Criado com sucesso!")
    }
})
```

## Existem quatro formas muito usadas para criar arquivos:

### **appendFile():**

```javascript
    fs.appendFile("NameFolder/NameFile", "Content", (erro) => {
        if(erro){
            res.status(500).json(message: erro);
        }else{
            res.status(201).json(message:"Criado com sucesso!")
        }
    })
```

## Usado para criar e atualizar informações dos arquivos:

### **writeFile():**

```javascript
    fs.writeFile("NameFolder/NameFile", "const test = 'Reijan';", (erro) => {
        if(erro){
            res.status(500).json(message: erro);
        }else{
            res.status(201).json(message:"criado e atualizado!")
        }
    }
```

Para atualizar os dados de um arquivo, é só escolher um arquivo e construir a mesma estrutura de dados, mas será uma atualização total do arquivo e não uma adição de dados.

## Deletando arquivos:

### **unlink():**

```javascript
    fs.unlink("NameFolder/NameFile", (erro) => {
        if(erro){
            res.status(500).json(message: erro);
        }else{
            res.status(200).json(message:"Arquivo deletado!")
        }
    });
```

## Renomeando arquivos :

### **rename():**

```javascript
    fs.rename("NameFolder/NameFile", 'NameFolder/RenamedFile', (erro) => {
        if(erro){
            res.status(500).json(message: erro);
        }else{
            res.status(200).json(message:"Arquivo renomeado!")
        }
    });
```
