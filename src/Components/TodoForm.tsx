"use client";

import { ITodoFormProps } from "@/Interfaces/todo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoForm({ onAdd }: ITodoFormProps) {
  const [title, setTitle] = useState("");
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd(title);
      setTitle("");
      router.push("/task")
    }
  };

  return (
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
  );
}







// const TodoForm = () => {
//     return (
//         <>
//             <div className="grid justify-center items-center min-w-screen min-h-screen">
//             <div className=" flex flex-col   mt-5">
//                 <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">TODO APP</h2>
//                 <p className="leading-relaxed mb-5 text-gray-600"></p>
//                 {/* <div className="relative mb-4">
//                     <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
//                     <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                 </div> */}
//                 <div className="relative mb-4">
//                     <label htmlFor="title" className="leading-7 text-sm text-gray-600">title</label>
//                     <input type="title" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                 </div>
//                 {/* <div className="flex mb-4 gap-9">
//                     <label htmlFor="completed" className="leading-7 text-sm text-gray-600">completed</label>
//                     <input type="checkbox" id="completed" name="completed"/>
//                 </div> */}
//                 <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//             </div>
//             </div>
//         </>
//     )
// }
// export default TodoForm