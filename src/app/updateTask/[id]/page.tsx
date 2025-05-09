"use client"
import { updateTaskById, getTodoById } from '@/Geteways/todo'
import { ITodo } from '@/Interfaces/todo'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TiArrowBackOutline } from 'react-icons/ti'

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

            <div className="min-h-screen justify-center items-center flex bg-gray-300">
                <main className=" md:w-xl md:h-76 grid mx-auto  bg-amber-50 p-5 rounded">
                    <h1 className="text-2xl font-bold mb-4 text-center">MODIFIER LA TACHE <br /> <i className='font-sans'>{id}</i></h1>


                    <form onSubmit={handleUpdateTask} className="flex gap-2 mb-4">

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Nouvelle tâche"
                            className="border p-2 flex-grow h-12"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 h-12 rounded">
                            Modifier
                        </button>


                    </form>
                    <div className="flex gap-3 justify-end italic font-serif">
                        <span>Retourner à la liste des taches</span>
                        <Link href="/" > <TiArrowBackOutline className="size-7 text-blue-500" />
                        </Link>
                    </div>
                </main>
            </div>

        </>
    )
}

export default UpdateTask