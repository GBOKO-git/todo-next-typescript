"use client"
import { updateTaskById, getTodoById } from '@/Geteways/todo'
import { ITodo } from '@/Interfaces/todo'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const UpdateTask = () => {
  const router = useRouter()
  const { id } = useParams()
  const [todo, setTodo] = useState<ITodo | null>(null)
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (id) {
      const taskToUpdate = getTodoById(Number(id))
      if (taskToUpdate) {
        setTodo(taskToUpdate)
        setTitle(taskToUpdate.title)
        setCompleted(taskToUpdate.completed)
      }
    }
  }, [id])

  const handleUpdateTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo) return
    if (!title.trim()) {
      alert('Le titre est obligatoire')
      return
    }
    updateTaskById(todo.id, title, completed)
    router.push('/tasks')
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <main className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6 dark:bg-black dark:text-white">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase font-serif">
            Modifier la tâche
          </h1>
          <Link href="/tasks" className="flex gap-2 items-center text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">
            <button className=" border p-2 rounded font-serif bg-gray-300/60 cursor-pointer">
              TACHES
            </button>
          </Link>
          
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateTask} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          <div className="md:col-span-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de la tâche"
              className="w-full h-12 px-4 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div className="md:col-span-1 ">
            <select
              value={completed ? 'done' : 'pending'}
              onChange={(e) => setCompleted(e.target.value === 'done')}
              className="w-full h-12 bg-gray-100 border border-gray-300 rounded px-2 focus:outline-none cursor-pointer text-black"
            >
              <option value="pending">En cours</option>
              <option value="done">Terminé</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Modifier
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default UpdateTask;
