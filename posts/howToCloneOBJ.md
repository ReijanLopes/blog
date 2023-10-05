---
title: "Como clonar um objeto"
date: "2023-09-30"
keyFilter: ["Javascript"]
spoiler: "Algo comum no manusear de um objeto e a clonagem desse objeto, para alterar e interagir com esse objeto de maneira que se tenha um callback"
---

Existem duas formas de clonar um objeto, o mais comum é o Shallow clone, mas uma muito boa clonar o objeto localmente sem mudar o original e o Deep clone. Dependendo da sua ideia e foco final são maneiras incríveis de controlar o objeto

# Shallow clone:

Uma maneira fácil e rápida de clonar a referência de um objeto, isso mesmo, quando se usa o Shallow clone, se clona a referência do objeto não o valor, então qualquer mudança no clone acarreta na mudança do original. Exemplo de uso:

```javascript
const clone = […original]
```

# Deep clone:

O Deep clone é um pouco mais complicado por que ele cria um novo objeto a partir dos valores do original, resultando num objeto que pode ser alterado sem alterar o original, sendo independente e reutilizável. Exemplos de uso:

## Fugir:

```javascript
    const clone = JSON.parse(JSON.stringify(person));
	ruim, lento, custoso
    const clone = eval(original.toSource());
	ruim, fuja de tudo que tiver essa função eval, vai por mim
```

Maneira simples com objetos pequenos, por ser feito a mão não é recomendado pra fazer com objetos grandes:

```javascript
const person = {
name: “name”,
occupation: {
role: "Engineer",
company: “Empresa do Irineu”
}
}
const clone = {
name: "name",
occupation: {
role: [...person.occupation.role], // clonando valor do role direto
company: "Empresa do Irineu"
}
}
```

## Maneira complexa para objetos grandes:

```javascript
function copy(aObject) {
  //Prevenção contra retornos indefinidos
  if (!aObject) return aObject;

  let bObject = Array.isArray(aObject) ? [] : {};

  let value;
  for (const key in aObject) {
    // Impedir auto referência a o objeto original
    if (Object.is(aObject[key], aObject)) continue;

    value = aObject[key];

    bObject[key] = typeof value === "object" ? copy(value) : value;
  }

  return bObject;
}
```

Para a criar um Deep clone também existe a função structuredClone, uma função criada para isso, tendo um desempenho de até 60% a mais do que a maneira nativa de clonar objetos, e sendo infinitamente mais simples para criação e implementação. Exemplo:

```javascript
const data = [{ name: "Reijan" }, { name: "Jose" }, { name: "Marcos" }];

// usando
const clone = structuredClone(data); //Objeto novo e independente
```
