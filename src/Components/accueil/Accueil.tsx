"use client"
import { getTodos } from "@/Geteways/todo";
import { ITodo } from "@/Interfaces/todo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";


const Accueil = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        setTodos(getTodos())
    }, [])
    return (
        <>
            <div className="grid  justify-center items-center  px-4 py-8  min-h-screen md:mx-15  ">
                <div className="md:min-w-7xl">
                    <h1 className="text-3xl text-center font-bold font-serif uppercase absolute justify-center top-28 left-1/2 -translate-x-1/2">GESTIONNAIRE DES TÂCHES</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 px-5 ">

                        <div
                            className="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
                            <Link href="/tasks" >
                                <div className="flex gap-2 items-center justify-center">
                                    <span className="font-bold text-4xl">{todos.length}</span>
                                    <FaTasks className="size-15 " />
                                </div>
                                <span className="font-semibold font-serif uppercase opacity-70 text-2xl text-center">Mes taches</span>
                            </Link>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
                            <Link href="/createTask" >
                                <div className="flex gap-2 items-center justify-center">

                                    <MdAddTask className="size-15" />

                                </div>
                                <span className="font-semibold font-serif uppercase opacity-70 text-2xl text-center">Creer une Tache</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accueil;