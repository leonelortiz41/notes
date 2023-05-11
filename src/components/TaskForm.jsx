import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask,editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from 'uuid'
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate, useParams } from 'react-router-dom'

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const navigate = useNavigate()
    const dsipatch = useDispatch()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            dsipatch(editTask(task))
        }
        else {
            dsipatch(addTask({
                id: uuid(),
                ...task,
            }))
        }
        navigate("/")
    }

    useEffect(() => {
        if (params.id) {
            const found = tasks.find(task => task.id === params.id)
            setTask(found)
        }
    }, [])
    return (
        <div className="flex flex-col w-[100%]   sm:w-[50%] lg:w-[30%] justify-center mx-auto">
            <div className='flex justify-start'>
            <Link className="p-1 my-2 block w-auto text-4xl text-center text-base content-between bg-purple-700 rounded-full" to="/"><TiArrowBack/></Link>
            </div>
            <form  className="flex flex-col" onSubmit={handleSubmit}>
                <input name="title" className="p-2 bg-zinc-900 mb-1" placeholder="title" type="text" onChange={handleChange} value={task.title} />
                <textarea name="description" className="p-2 bg-zinc-900 mb-1 h-44 overflow-y-auto" placeholder="description" onChange={handleChange} value={task.description} ></textarea>
                <button className='p-1 px-4 mx-auto block  text-base text-xl bg-purple-700 rounded-sm '>save</button>
            </form>
        </div>
    )
}

export default TaskForm
