import React,{ useEffect } from 'react'
import { useTask } from '../hooks/useTask'
import TaskCard from './TaskCard'
import Image from 'next/image'
import picture from '../assets/image.jpg'

const Tasks = () => {
    const {tasks, dispatch} = useTask()

    const getTasks = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/todo`)
        const data = await res.json()

        if(res.ok){
            dispatch({
                type: 'SET_TASKS',
                payload: data
            })
        }
    }

    useEffect(() => {
        getTasks()
    }, [])
    
    console.log(tasks)

    return (
        <article className='flex flex-row gap-20'>
            <div className='flex-1'>
                <h2 className='text-white font-semibold text-xl'>
                    You have <span>{tasks && tasks.length}</span> tasks
                </h2>
                <div className='shadow-xl flex flex-col gap-10 p-8 bg-white rounded-xl mt-10'>
                    {tasks && tasks.map((item) => (
                        <TaskCard key={item._id} data={item} />
                    ))}
                </div>
            </div>
            <div className='flex-1'>
                <div className='relative w-full h-[60vh] shadow-xl rounded-xl'>
                    <Image fill src={picture} alt="Image" className='shadow-xl rounded-xl border-[30px] border-[#6C00FF]' />
                </div>
            </div>
        </article>
    )
}

export default Tasks