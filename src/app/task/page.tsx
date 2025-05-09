"use client"
import Link from "next/link";
import { getTodos, toggleTodo, deleteTodo } from "@/Geteways/todo";
import { useEffect, useState } from "react";
import { ITodo } from "@/Interfaces/todo";



const Task = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        setTodos(getTodos());
    }, []);
  
    
    const handleToggleTodo = (id: number) => {
        toggleTodo(id);
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    

    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <div className="px-4 py-2">
                    <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
                </div>
                <form className="w-full max-w-sm mx-auto px-4 py-2">
                    <div className="flex items-center border-b-2 border-teal-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Add a task" />
                        <Link
                            href="/createTask"
                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="button">
                            Add
                        </Link>
                    </div>
                </form>
                <ul className="divide-y divide-gray-200 px-4">
                    {todos.map((todo) => (
                        <li key={todo.id} className="py-4">
                            <div className="flex items-center">
                                <input checked={todo.completed} id={`todo-${todo.id}`} name={`todo-${todo.id}`} type="checkbox" onChange={() =>handleToggleTodo(todo.id)}
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                                <label htmlFor="todo1" className="ml-3 flex justify-between text-gray-900  w-full">
                                    <div className={todo.completed ?  "text-gray-400 line-through"  : "text-lg font-medium"}>{todo.title}</div>
                                    <div className="flex gap-2">
                                        <Link  href={`/updateTask/${todo.id}`}  >
                                        <button className="text-sm font-light bg-violet-800 border-1 cursor-pointer hover:bg-violet-950 rounded px-2 text-white">Editer</button>
                                        </Link>
                                        <Link href={`/deleteTask/${todo.id}`} >
                                        <button  className="text-sm font-light text-slate-100 bg-red-500 cursor-pointer hover:bg-red-950 rounded px-1">Supprimer</button>
                                        </Link>
                                    </div>
                                </label>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Task;