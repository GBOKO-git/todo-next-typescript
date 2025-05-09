"use client"
import { addTodo, } from "@/Geteways/todo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const router = useRouter()


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      router.push("/")
    }
  }
  return (
    <>
      <div className="min-h-screen justify-center items-center flex bg-gray-300">
        <main className=" md:w-xl md:h-76 grid mx-auto  bg-amber-50 p-5 rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">AJOUTER UNE TACHE</h1>


        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nouvelle tâche"
            className="border p-2 flex-grow h-12"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 h-12 rounded">
            Ajouter
          </button>


        </form>
        <div className="flex gap-3 justify-end italic font-serif">
          <span>Retourner à la liste des taches</span>
          <Link href="/task" > <TiArrowBackOutline className="size-7 text-blue-500" />
          </Link>
        </div>
      </main>
      </div>
    </>
  )
}

export default CreateTask;