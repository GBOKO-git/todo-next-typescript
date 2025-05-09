"use client"
import { updateTaskById, getTodoById } from '@/Geteways/todo'
import { ITodo } from '@/Interfaces/todo'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

 const UpdateTask = () => {
    const router = useRouter()
    const { id } = useParams()
    const [todo, setTodo] = useState<ITodo | null>(null)
    const [title, setTitle] = useState('')


    useEffect(() => {
        if (id) {
            const updateTask = getTodoById(Number(id));
            if (updateTask) {
                setTodo(updateTask);
                setTitle(updateTask.title)
            }
        }
    }, [id])


    const handleUpdateTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            updateTaskById(todo.id, title)
            alert(`Lache ${todo?.title} a été modifiée avec success`)
            router.push('/')
        }
    }

        return (
            <>
                <main className="max-w-md mx-auto mt-10">
                    <h1 className="text-2xl font-bold mb-4 text-center">Ma Todo List</h1>
                    <form className="flex gap-2 mb-4" onSubmit={handleUpdateTask}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Nouvelle tâche"
                            className="border p-2 flex-grow"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                            Modifier
                        </button>

                    </form>
                </main>
            </>
        )
    }

    export default UpdateTask