"use client";

import Link from "next/link";
import { getTodos } from "@/Geteways/todo";
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
        <div className="grid pt-10 items-center justify-items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg p-8">
                
                <div className="flex justify-between">
                    {/* Titre */}
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase font-serif text-center">Ma liste des tâches</h1>
                    </div>
                    {/* Retour */}
                    <button className="mb-6 border md:p-1 rounded sm:font-normal bg-gray-300/60">
                        <Link href="/" className="flex gap-2 items-center text-blue-600 hover:text-blue-800 font-semibold">
                            <TiArrowBackOutline className="text-xl" />
                            ACCUEIL
                        </Link>
                    </button>
                </div>

                {/* Bouton Ajouter */}
                <form className="w-full mb-6">
                    <div className="flex items-center border-b border-gray-400 py-2">
                        <input
                            disabled
                            className="bg-gray-100 border-none w-full text-gray-600 py-2 px-4 rounded focus:outline-none"
                            type="text"
                            placeholder="Ajouter une tâche"
                        />
                        <Link
                            href="/createTask"
                            className="w-32 flex gap-1 justify-between items-center ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition font-semibold"
                        >
                        <span >+</span><p className="uppercase">Ajouter</p>
                        </Link>
                    </div>
                </form>

                {/* Tableau */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-700 bg-white rounded">
                        <thead>
                            <tr className="bg-gray-300 uppercase text-gray-800">
                                <th className="text-left p-3 px-5">Tâches</th>
                                <th className="text-left p-3 px-5">Statut</th>
                                <th className="text-center p-3 px-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${todo.completed ? "bg-green-50 hover:bg-green-100" : "hover:bg-gray-100"
                                        }`}
                                >
                                    <td className="p-3 px-5">
                                        <p
                                            className={`font-medium ${todo.completed ? "text-gray-500 line-through" : "text-gray-800"
                                                }`}
                                        >
                                            {todo.title}
                                        </p>
                                    </td>
                                    <td className="p-3 px-5">
                                        {todo.completed ? (
                                            <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">
                                                Terminé
                                            </span>
                                        ) : (
                                            <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                                                En cours
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3 px-5 text-center">
                                        <div className="flex justify-center gap-3">
                                            <Link href={`/updateTask/${todo.id}`}>
                                                <button className="text-violet-600 hover:bg-violet-600 hover:text-white transition rounded-full p-2 cursor-pointer">
                                                    <CiEdit className="text-lg " size={28} />
                                                </button>
                                            </Link>
                                            <Link href={`/deleteTask/${todo.id}`}>
                                                <button className="text-red-600 hover:bg-red-600 hover:text-white transition rounded-full p-2 cursor-pointer">
                                                    <FaRegTrashCan className="text-lg " size={28} />
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {todos.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="p-4 text-center text-gray-500 italic">
                                        Aucune tâche trouvée.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Task;
