# TodoList App

Um aplicativo simples de lista de tarefas construído com React, TypeScript, Vite e Tailwind CSS.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Filtrar tarefas por:
  - Todas
  - Ativas
  - Concluídas
- Remover tarefas individualmente
- Limpar todas as tarefas concluídas

## Tecnologias usadas

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Estrutura do Projeto

- `src/App.tsx` - Componente principal que orquestra todo o aplicativo
- `src/hooks/useTodo.ts` - Hook personalizado para gerenciar o estado da lista de tarefas
- `src/components/TodoForm` - Formulário para criar novas tarefas
- `src/components/TodoList` - Exibição da lista de tarefas e controles de filtro
- `src/components/TodoHeader` - Cabeçalho do aplicativo
- `src/components/TodoContainer` - Container principal da UI

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal, geralmente `http://localhost:5173`

## Scripts úteis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o ESLint no projeto

## Dicas

- Use o formulário para adicionar uma tarefa.
- Clique na tarefa ou em um botão correspondente para marcar como concluída.
- Utilize os filtros para ver tarefas ativas, concluídas ou todas.
- Remova tarefas com o controle disponível ou use o botão de limpar concluídas.

## Observações

O estado das tarefas é mantido apenas em memória. Ao atualizar a página, a lista de tarefas será resetada.
