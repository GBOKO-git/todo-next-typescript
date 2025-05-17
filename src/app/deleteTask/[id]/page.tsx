"use client";

import { deleteTodo } from "@/Geteways/todo";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTodoById } from "@/Geteways/todo"
import { ITodo } from "@/Interfaces/todo";
import { CiSquareRemove } from "react-icons/ci";

const DeleteTask = () => {
  const { id } = useParams();
  const router = useRouter();
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    if (id) {
      const todoFound = getTodoById(Number(id));
      setTodo(todoFound || null);
    }
   
   
  }, [id]);

  const handleDeleteTodo = async (todoId: number) => {
    try {
      await deleteTodo(todoId);
      router.push("/tasks"); // Redirection après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  if (!todo) return null;

  return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center dark:bg-white">
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
        onClick={() => router.back()} // Ferme le modal
      ></div>

      <div className="relative w-full pointer-events-none transition my-auto p-4">
        <div className="w-full py-2 bg-white pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
          <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => router.back()}
          >
            <CiSquareRemove />
            <span className="sr-only">Close</span>
          </button>

          <div className="space-y-2 p-2 text-center dark:text-white">
            <h2 className="text-xl font-semibold text-violet-900">  Êtes-vous sûr de vouloir supprimer cette tâche ?</h2>
            <p className="text-gray-900 text-xl">
             {todo.title}
            </p>
          </div>

          <div className="border-t dark:border-gray-700 px-2"></div>

          <div className="px-6 py-2 grid gap-2 grid-cols-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-200 py-2 rounded-lg dark:text-black"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => handleDeleteTodo(Number(id))}
              className="bg-red-900 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
