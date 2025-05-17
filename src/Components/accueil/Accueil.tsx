"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { getTodos } from "@/Geteways/todo";
import { ITodo } from "@/Interfaces/todo";

const Accueil = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl text-center font-bold font-serif uppercase mb-12 text-gray-800">
          Gestionnaire des Tâches
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mes Tâches */}
          <Link href="/tasks">
            <div className="bg-white hover:bg-gray-100 border border-gray-300 p-6 rounded-xl shadow-md cursor-pointer transition">
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl font-bold text-blue-600">{todos.length}</span>
                <FaTasks className="text-5xl text-gray-600" />
              </div>
              <p className="mt-4 text-xl text-center font-medium text-gray-700 uppercase">
                Mes Tâches
              </p>
            </div>
          </Link>

          {/* Créer une tâche */}
          <Link href="/createTask">
            <div className="bg-white hover:bg-gray-100 border border-gray-300 p-6 rounded-xl shadow-md cursor-pointer transition">
              <div className="flex items-center justify-center gap-4">
                <MdAddTask className="text-5xl text-green-600" />
              </div>
              <p className="mt-4 text-xl text-center font-medium text-gray-700 uppercase">
                Créer une Tâche
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
