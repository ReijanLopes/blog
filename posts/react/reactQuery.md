---
title: "O que é React query"
folder: "react"
date: "2022-09-12"
keyFilter: "React"
spoiler: "Uma ferramenta que está facilitando o trabalho do frontend, focada em lidar com as informações do dataBase"
---

React query é uma **ferramenta(biblioteca) de gerenciamento de estado**. Ele apresenta os principais conceitos de **estado-do-cliente estado-do-servidor(que o servidor te retorno)**. Seu diferencial é justamente por lidar com os dois estados que ele facilita o trabalho de buscar, ouvir ou e pegar o que foi escrito. Trazendo várias maneiras de atualizar as informações do cliente sempre
Além de lidar com o estado do servidor, ele funciona incrivelmente bem, sem precisar de configurações customizadas, e por ser personalizado conforme o seu gosto.

### Instalando:

```javascript
npm install react-query react-query-detools axios –save
yarn add react-query react-query-devtools axios
```

O React query também suas ferramentas de desenvolvimento, que nos ajuda a visualizar o funcionamento interno do React query.

```javascript
import { ReactQueryDevtools } from "react-query-devtools";
function App() {
  return (
    <>
      {/* Os outros componentes da nossa aplicação */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
```

Depois de adicionar no seu código, podemos ver os fluxo de dados que estão acontecendo dentro do app, ajudando a reduzir o tempo de duração do app. Assim como o GraphQL, o React query apresentar conceitos básicos como.

- Query(solicitacao de informacoes feitas ao banco de dados)

- Mutações

- Invalidação de querys

```javascript
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
// import um "Hook do react query"
import Card from "./Card";

const fetchPokemons = async () => {
  // buscando no Database
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=50"
  );
  return data;
};
function Main() {
  /* passando a função pro state e
  desestruturando dá informações (data vinda do banco de dados)
  e os status tornado os dois globais dentro do componente.*/
  const { data, status } = useQuery("pokemons", fetchPokemons);
  const PokemonCard = (pokemons) => {
    // nome pokemons vindo do query hook
    return pokemons.results.map((pokemon) => {
      // iterando sobre o array
      return <Card key={pokemon.name} name={pokemon.name}></Card>;
    });
  };
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching pokemons</div>}
      {status === "success" && <div>{PokemonCard(data)}</div>}
      {//se a promesse der certo}
    </div>
  );
}
export default Main;
```

Por padrão o React query armazenar em cache(guardar informações em algum lugar) só solicitando a atualização dos elementos quando esse elementos estão desatualizados, mas podemos configurar para que os dados sejam atualizados em um tempo previamente determinado. Exemplo de uso:

```javascript
const { data, status } = useQuery("pokemons", fetchPokemons, {
  staleTime: 5000,
  cacheTime: 10,
});
```

staleTime: Tempo de espera até fazer outra chamada
cacheTime: quantidade de tempo que as informações vão ficar em cache
retryTime: Número de tentativas de chamadas de dados.

Se o cache estiver desatualizado então podemos invalidar o cache de maneira programática para que o React query atualize. Exemplo:

```javascript
queryCache.invalidateQueries("pokemons");
```

Mutações

As mutações são usadas para criar/atualizar/excluir dados. O useMutation realiza essas mutações, se a chamada para api falhar então vamos mudar as entradas e apresentar informações novas. Tendo propriedades para lidar com os erros

Estrutura do React Query simples para mobile:
Importacoes:

```javascript
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueyClient();
//importante chamar
```

sempre encapsular as informações dos outros componentes com QueryClientProvider

```javascript
<NavigationContainer>
    <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
        <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
</NavigationContainer>
```

Com essa estrutura criada as informações podem ser acessadas de qualquer lugar da sua do seu app.
