# infinit-scroll

Um aplicativo React Native que demonstra o consumo de API com scroll infinito, utilizando a API DummyJSON para exibir produtos.

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- React Query (TanStack Query)
- TypeScript
- React Native Reanimated
- Expo Router

## 📱 Funcionalidades

- Consumo de API RESTful
- Scroll infinito com paginação
- Loading states e skeletons
- Interface responsiva
- Cache de dados com React Query

## 🛠️ Estrutura do Projeto

```
infinit-scroll/
├── app/                 # Rotas e layouts da aplicação
├── components/          # Componentes reutilizáveis
│   ├── ProductCard.tsx  # Card de exibição do produto
│   └── ProductSkeleton.tsx # Skeleton loading
├── services/           # Serviços e chamadas de API
├── types/              # Definições de tipos TypeScript
└── constants/          # Constantes e configurações
```

## 🔄 Como Funciona o Scroll Infinito

O scroll infinito é implementado utilizando:

1. **React Query (useInfiniteQuery)**: Gerencia o estado da paginação e cache dos dados
2. **FlatList**: Componente de lista com suporte a scroll infinito
3. **Lógica de Paginação**: 
   - Carrega 3 produtos por vez
   - Detecta quando o usuário chega ao final da lista
   - Carrega automaticamente mais produtos

## 📦 Consumo da API

A aplicação consome a API DummyJSON (`https://dummyjson.com/products`), que fornece dados de produtos fictícios. A implementação inclui:

- Paginação com parâmetros `skip` e `limit`
- Tratamento de erros
- Cache de dados
- Loading states

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o projeto:
```bash
npx expo start
```

## 📝 Observações

- O projeto utiliza TypeScript para tipagem estática
- Implementa skeletons para melhor UX durante o carregamento
- Utiliza React Query para gerenciamento de estado e cache
- Interface responsiva e adaptável a diferentes tamanhos de tela
