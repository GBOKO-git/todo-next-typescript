"use client";
import { addTodo } from "@/Geteways/todo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Veuillez entrer un titre de tâche.");
      return;
    }

    addTodo(title);
    router.push("/tasks");
  };

  return (
    <div className="min-h-screen flex justify-center items-center  px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <main className="w-full max-w-xl bg-white shadow-md p-8 rounded-xl">
        <div className="flex justify-around ">
          {/* Titre */}
          <div className="mb-4">
            <h1 className="md:text-3xl font-bold text-gray-800 uppercase font-serif text-center ">Ajouter une Tâche</h1>
          </div>
          {/* Retour */}
          <button className="mb-6 border md:p-1 rounded sm:font-normal bg-blue-300/60  md:w-30 md:px-4 md:py-2 p-1 font-serif">
            <Link href="/tasks" className="flex gap-2 items-center justify-center text-blue-600 hover:text-blue-800 font-semibold uppercase">
              Taches
            </Link>
          </button>

        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 uppercase">

        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError("");
            }}
            placeholder="Nouvelle tâche"
            className="border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Ajouter
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateTask;
