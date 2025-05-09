"use client"
import { addTodo, } from "@/Geteways/todo";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const router = useRouter()


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      router.push("/task")
    }
  }
  return (
    <>
      <main className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Ma Todo List</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nouvelle tâche"
            className="border p-2 flex-grow"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Ajouter
          </button>

        </form>
      </main>
    </>
  )
}

export default CreateTask;