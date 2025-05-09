import { ITodo } from "@/Interfaces/todo";
import { title } from "process";
const STORAGE_KEY = "todos";

function getStoredTodos(): ITodo[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveTodos(todos: ITodo[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function getTodos(): ITodo[] {
  return getStoredTodos();
}


export const getTodoById = (id: number): ITodo | undefined => {
  const todos = getStoredTodos()
  return todos.find((todo) => todo.id === id);
}


export function addTodo(title: string): ITodo {
  const todos = getStoredTodos();
  const newTodo: ITodo = {
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos(todos);
  return newTodo;
}

// update task by id
export const updateTaskById = (id: number, newTitle: string):ITodo | null => {
  const todos = getStoredTodos()
 const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, title: newTitle} : todo)
 const updatedTodo = updatedTodos.find((todo) => todo.id === id) || null
 saveTodos(updatedTodos)
 return updatedTodo
}


export function toggleTodo(id: number): void {
  const todos = getStoredTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos(updatedTodos);
} 

export function deleteTodo(id: number): void {
  const todos = getStoredTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(updatedTodos);
}


 