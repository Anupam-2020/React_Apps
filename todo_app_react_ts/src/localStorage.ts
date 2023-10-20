import { TodoItemType } from "./App";

export const saveToLocal = (todos: TodoItemType[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export const getFromLocal = (): TodoItemType[] => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}