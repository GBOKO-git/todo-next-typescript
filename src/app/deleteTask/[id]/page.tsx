"use client";

import { deleteTodo, getTodoById } from "@/Geteways/todo";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ITodo } from "@/Interfaces/todo";
import { CiSquareRemove } from "react-icons/ci";

const DeleteTask = () => {
  const { id } = useParams();
  const router = useRouter();
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    if (id) {
      const foundTodo = getTodoById(Number(id));
      setTodo(foundTodo || null);
    }
  }, [id]);

  const handleDelete = async (todoId: number) => {
    try {
      await deleteTodo(todoId);
      router.push("/tasks");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  if (!todo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/30 backdrop-blur-sm px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 cursor-pointer"
        onClick={() => router.back()}
      ></div>

      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 z-50 space-y-6">
        {/* Fermer le modal */}
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
          onClick={() => router.back()}
        >
          <CiSquareRemove className="text-2xl cursor-pointer" />
          <span className="sr-only">Fermer</span>
        </button>

        {/* Titre */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-red-700">Supprimer la tâche</h2>
          <p className="text-gray-800 dark:text-white">
            Êtes-vous sûr de vouloir supprimer la tâche :
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            “{todo.title}”
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-medium cursor-pointer"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={() => handleDelete(Number(id))}
            className="bg-red-700 hover:bg-red-600 text-white py-2 rounded-lg font-medium cursor-pointer"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
