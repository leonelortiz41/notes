import React from 'react'
import { removeTask } from "../features/tasks/taskSlice"
import { useSelector, useDispatch } from "react-redux"
import { IoMdDoneAll } from "react-icons/io";
import { AiFillEdit} from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const tasklist = tasks.map(task => (
    <div className='m-auto  w-full lg:w-[25%] sm:w-[33.3%] inline-block'>
      <div key={task.id} className='m-2 bg-neutral-950  rounded shadow-md   text-center p-2'>
        <h2 className='my-1 text-purple-400'>{task.title}</h2>
        <div className='h-32  break-words overflow-x-auto'>
          <p className=''>{task.description}</p>
        </div>
        <div className=' flex justify-evenly'>
          <button className='p-1 text-xl bg-green-900 rounded-full ' onClick={() => {
            dispatch(removeTask(task))
          }}><IoMdDoneAll/></button>
          <Link className='p-1 text-xl  bg-sky-700 rounded-full ' to={`editTask/${task.id}`}>
            <AiFillEdit/></Link>
        </div>
      </div>
    </div>
  ))
  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-center'>
        <Link className='py-1 px-2 mr-3  inline-block rounded-sm  bg-purple-700 text-lg  text-center' to="taskForm">+ create task</Link>
      </div>
      <div className='overflow-y-auto mt-2'>
        {tasklist}
      </div>
    </div>
  )
}

export default TaskList
