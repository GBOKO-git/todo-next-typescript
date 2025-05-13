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
    const [completed, setCompleted] = useState(false)



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
        
        if (!todo){
            return;
        } else if (!title || title.trim()=== "") {
            alert('Le titre es obligatoire')
            return;
        } else
        {
            updateTaskById(todo.id, title, completed)
            // alert(`Lache ${todo?.title} a été modifiée avec success`)
            router.push('/task')
        }
    }

    return (
        <>

            <div className="min-h-screen justify-center items-center flex bg-gray-300 px-2">
                <main className=" md:w-xl md:h-80 h-100 grid mx-auto  bg-gray-100 p-5 rounded dark:bg-black dark:text-white">
                    <h1 className="text-2xl font-bold mb-4 text-center ">MODIFIER LA TACHE <br /> </h1>


                    <form onSubmit={handleUpdateTask} className="grid md:grid-cols-6  gap-2 mb-4 w-full dark:text-black  items-center px-2 ">
                        <div className='col-span-3'>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Modification de tâche "
                                className='bg-white h-12 text-center'
                            />
                        </div>
                        <div className='col-span-2'>
                            <select

                                value={completed ? 'done' : 'pending'}
                                onChange={(e) => setCompleted(e.target.value === 'done')}
                                className="bg-transparent border-b-2 border-gray-300 py-2">
                                <option value="pending">En cours</option>
                                <option value="done">Terminé</option>
                            </select>
                        </div>
                        <div className='col-span-1'>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 h-12 rounded ">
                                Modifier
                            </button>
                        </div>





                    </form>


                    <div className="flex gap-3 justify-end italic font-serif items-center rounded dark:text-white dark:bg-black">
                        <span>Retourner à la liste des taches</span>
                        <Link href="/task" > <TiArrowBackOutline className="size-7 text-blue-500" />
                        </Link>
                    </div>
                </main>
            </div>

        </>
    )
}

export default UpdateTask