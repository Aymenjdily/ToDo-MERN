import React,{ useState } from 'react'
import {MdDone, MdUpdate, MdDelete} from 'react-icons/md'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { IoOpenOutline } from 'react-icons/io5'
import { useTask } from '../hooks/useTask'

const TaskCard = ({ data }) => {
    const [isDone, setIsDone] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const {dispatch} = useTask()
    const [newTitle, setNewTitle] = useState('')

    const handleTask = () => {
        setIsDone((prev) => !prev)
    }

    const updateTask = () => {
        setIsUpdated((prev) => !prev)
    }

    const newTaskTitle = async () => {

    }

    const deleteTask = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/todo/${data._id}`, {
            method: 'DELETE'
        })

        const json = await res.json()

        if(res.ok){
            dispatch({
              type: 'DELETE_TASK',
              payload: json
            })
        }
    }

    return (
        <div className='border-b-2 flex justify-between border-black pb-5'>
            <div className='flex flex-col gap-1'>
                {
                    isUpdated ?
                    <div className='flex flex-row gap-5'>
                        <input 
                            type="text" 
                            placeholder={`${data.title} |`}
                            id="title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="outline-none border-b-2 py-2 mb-5"
                        />
                        <button
                            className='bg-blue-500 text-white px-5 h-10'
                            onClick={newTaskTitle}
                        >
                            Update
                        </button>
                    </div>
                    :
                    <p className={`font-semibold text-xl ${isDone ? "text-green-500 line-through" : ""}`}>
                        {data.title}
                    </p>
                }
                <Link href=''>
                    <span className='flex flex-row gap-2 items-center capitalize'>
                        add notes <IoOpenOutline />
                    </span>
                </Link>
                <span className='text-sm text-gray-500 mt-3'>
                    {formatDistanceToNow(new Date(data.createdAt), {addSuffix: true})}
                </span>
            </div>
            <div className='flex flex-row gap-2'>
                <button 
                    className='bg-green-500 w-10 h-10 flex items-center justify-center p-2 rounded-full text-white'
                    onClick={handleTask}
                >
                    <MdDone />
                </button>
                <button 
                    className='bg-blue-500 p-2 w-10 h-10 rounded-full flex items-center justify-center text-white'
                    onClick={updateTask}
                >
                    <MdUpdate />
                </button>
                <button 
                    className='bg-red-500 p-2 w-10 h-10 rounded-full flex items-center justify-center text-white'
                    onClick={deleteTask}
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default TaskCard