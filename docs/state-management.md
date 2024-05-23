# 🗃️ State Management

The app uses Redux and Redux Toolkit to manage the state of todos, logged in user, and public todos.

## Store

The store is located in `src/store/store.ts`.

## Todo Slice

A single todo object requires `id, title, content, createdAt, completed`.

To update the todos array of objects, use the `addTodo` dispatch like `dispatch(addTodo({title: name.current,content: 'content',createdAt: new Date().toISOString(),}))`
