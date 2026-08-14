---
title: "Solicitações de Rede com JavaScript"
date: "18-02-2025"
keyFilter: ["JavaScript", "Fetch", "AJAX"]
spoiler: "Exploração das solicitações assíncronas com Fetch e como trabalhar com JSON"
---


# Solicitações de rede com JavaScript

Antes da introdução do conceito de AJAX (Asynchronous JavaScript and XML), para atualizar uma parte de uma página, os navegadores da época realizavam uma solicitação completa da página para o servidor. Após a requisição ser recebida, o servidor gerava e retornava uma nova página inteira para o navegador, o que significava que até mesmo uma pequena alteração no conteúdo da página exigia o carregamento completo dela. Esse processo resultava em uma experiência de navegação mais lenta e menos eficiente para ...

Com a evolução das necessidades de interação na web, em 2006, o World Wide Web Consortium publicou uma especificação preliminar para o objeto XMLHttpRequest, que passou a ser utilizado para recuperar dados de um servidor de forma assíncrona. Essa mudança permitiu que os navegadores passassem a atualizar partes específicas de uma página sem a necessidade de um carregamento completo, superando as limitações anteriores. Inicialmente, o XMLHttpRequest era empregado para buscar dados em XML, o que explica...

Essa capacidade de realizar requisições assíncronas foi fundamental para melhorar a experiência do usuário, permitindo uma navegação mais fluida. Em sites modernos, uma das tarefas mais comuns é o uso de solicitações de rede para acessar dados de servidores, atualizar informações ou criar novos conteúdos. Contudo, com o uso do XMLHttpRequest, sempre que um usuário interagia com a página, era necessário recarregar todo o site para obter novos dados, o que ainda gerava uma experiência pouco eficiente.

O avanço das tecnologias trouxe o conceito de carregamento dinâmico, que superou essas limitações. Através das requisições assíncronas, foi possível atualizar apenas partes específicas da página, sem a necessidade de um carregamento completo, tornando a navegação muito mais rápida e eficiente. Essa abordagem não só melhorou a experiência do usuário, mas também reduziu o consumo de dados e a carga no servidor. O principal responsável por essa transformação foi o fetch, uma alternativa ao XMLHttpRequest.

Antes do surgimento do fetch, as requisições HTTP em JavaScript eram feitas principalmente com o objeto XMLHttpRequest (XHR), que era a principal alternativa para comunicação assíncrona com servidores. Contudo, o uso do XMLHttpRequest era mais complexo e menos intuitivo em comparação com o fetch. Este último trouxe um modelo mais simples, com um relacionamento nativo com o JSON e maior facilidade para lidar com dados. Essas melhorias fizeram com que o fetch fosse amplamente adotado pela comunidade.

## Exemplo de comparação:

**XMLHttpRequest:**

```javascript
const xhr = new XMLHttpRequest();

// Configura a requisição (método, URL e se é assíncrono)
xhr.open("GET", "https://api.exemplo.com/dados", true);

// Define o que acontece quando a resposta chega
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // 4 significa que a requisição terminou
    if (xhr.status === 200) { // 200 indica sucesso
      console.log("Resposta:", xhr.responseText);
    } else {
      console.error("Erro na requisição:", xhr.status);
    }
  }
};

// Envia a requisição
xhr.send();
```

**Fetch:**

```javascript
async function carregarDados() {
  try {
    const response = await fetch("https://api.exemplo.com/dados");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}
```

## Trabalhando com JSON na Fetch API

Quando se trabalha com a **Fetch API** em JavaScript, você pode fazer solicitações HTTP e lidar com os dados retornados, especialmente se os dados estiverem no formato JSON. A Fetch API é muito mais simples e intuitiva em comparação ao XMLHttpRequest, especialmente para manipular respostas JSON.

- **response.text() vs. response.json()**:
  - **response.text()**: Retorna o corpo da resposta como uma string (útil para texto simples ou HTML).
  - **response.json()**: Retorna a resposta como um objeto JSON (útil quando os dados estão nesse formato).

- **Buscar dados de um arquivo JSON**: Para carregar dados de um arquivo JSON, use a Fetch API com response.json() para transformar a resposta em um objeto JavaScript. Exemplo:

```javascript
fetch('produtos.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
` `
- **Exemplo de site fictício de supermercado**: Um exemplo simples de como você poderia usar a Fetch API para exibir uma lista de produtos de um supermercado:
` `

```html
<ul id="product-list"></ul>
<script>
  fetch('produtos.json')
    .then(response => response.json())
    .then(data => {
      data.produtos.forEach(produto => {
        // Exibe cada produto
      });
    });
</script>
```
` `
**Estrutura do arquivo produtos.json:**

```json
{
  "produtos": [
    {
      "nome": "Arroz",
      "preco": 25.50,
      "descricao": "Arroz branco, 5kg."
    },
    {
      "nome": "Feijão",
      "preco": 12.30,
      "descricao": "Feijão preto, 1kg."
    },
    {
      "nome": "Macarrão",
      "preco": 5.90,
      "descricao": "Macarrão espaguete, 500g."
    }
  ]
}
```