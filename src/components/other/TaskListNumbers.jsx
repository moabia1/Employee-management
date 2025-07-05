import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between screen gap-5'>
      <div className='w-[45%] py-6 px-9   bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9   bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9   bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9   bg-zinc-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9   bg-emerald-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers