"use client"
import Link from "next/link";
import { getTodos, toggleTodo } from "@/Geteways/todo";
import { useEffect, useState } from "react";
import { ITodo } from "@/Interfaces/todo";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { TiArrowBackOutline } from "react-icons/ti";



const Task = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        setTodos(getTodos());
    }, []);

    return (
        <>
            <div className="grid  pt-10 items-center justify-items-center min-h-screen bg-gray-600">


                <div >

                    <Link href="/" className="flex gap-3 justify-end italic font-serif text-2xl text-white">
                        <span>RETOUR À LA PAGE D'ACCUEIL</span>
                        <TiArrowBackOutline className="size-7 text-blue-500" />
                    </Link>
                </div>

                <div className="md:min-w-4xl mx-auto  bg-slate-300 shadow-lg rounded-lg overflow-hidden  p-7">

                    <div className="px-4 py-2 ">
                        <h1 className="text-gray-800 font-bold text-2xl uppercase font-serif">Ma liste des tâches </h1>
                    </div>
                    <form className="w-full md:min-w-3xl mx-auto px-4 py-2 ">
                        <div className="flex items-center border-b-2 border-teal-500 py-2">
                            <input
                                disabled
                                className="appearance-none bg-transparent border-none w-full dark:bg-white text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Ajouter une tache" />
                            <Link
                                href="/createTask"
                                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="button">
                                + Ajouter
                            </Link>
                        </div>
                    </form>
                    <div className="text-gray-900 ">
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4 ">
                                <tbody>
                                    <tr className="border-b">
                                        {/* <th className="text-left p-3 px-5">ID</th> */}
                                        <th className="text-left p-3 px-5">TACHES</th>
                                        <th className="text-left p-3 px-5">STATUS</th>
                                        <th className="text-center p-3 px-5"> ACTIONS </th>
                                    </tr>
                                    {todos.map((todo, index) => (
                                        <tr key={index} className={todo.completed ? "border-b hover:bg-green-300 bg-gray-100" : "border-b hover:bg-gray-300 bg-gray-100"}>
                                           
                                            <td className="p-3 px-5">
                                                <p className={todo.completed ? "text-gray-700 line-through font-semibold " : "bg-transparent border-b-2 border-gray-300 py-2"}>{todo.title}</p>
                                            </td>
                                            <td className="p-3 px-5">
                                                {todo.completed ? (<p className=" w-15 text-green-900 rounded">Terminé</p>) : (<p className="bg-orange-300 w-22 text-center rounded">En cours ...</p>)}


                                            </td>
                                            <td className="p-3  flex justify-center">
                                                <div className="flex gap-3 ">
                                                    <Link href={`/updateTask/${todo.id}`}  >
                                                        <button className="text-sm font-light text-violet-800 border-1 cursor-pointer hover:text-white hover:bg-violet-950 rounded px-2"><CiEdit className="size-7" /></button>
                                                    </Link>
                                                    <Link href={`/deleteTask/${todo.id}`} >
                                                        <button className="text-sm font-light text-red-700  cursor-pointer hover:text-red-500 rounded px-1"><FaRegTrashCan className="size-7" /></button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Task;