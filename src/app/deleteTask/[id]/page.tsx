"use client";

import { deleteTodo } from "@/Geteways/todo";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTodoById } from "@/Geteways/todo"
import { ITodo } from "@/Interfaces/todo";

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
      alert("Tâche supprimée !");
      router.push("/task"); // Redirection après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  if (!todo) return null;

  return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
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
            <svg
              title="Close"
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          <div className="space-y-2 p-2 text-center dark:text-white">
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p className="text-gray-500">
              Êtes-vous sûr de vouloir supprimer cette tâche ?
            </p>
          </div>

          <div className="border-t dark:border-gray-700 px-2"></div>

          <div className="px-6 py-2 grid gap-2 grid-cols-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-200 py-2 rounded-lg"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => handleDeleteTodo(Number(id))}
              className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-500"
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
