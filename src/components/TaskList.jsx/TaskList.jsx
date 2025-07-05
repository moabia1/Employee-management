import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start flex-nowrap h-[55%] w-full p-5 mt-10 gap-5'>
      <div id='tasklist-child' className='flex-shrink-0 h-full bg-green-300 w-[25%] rounded-xl p-3 overflow-y-auto'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm font-semibold px-2 py-1 rounded'>High</h3>
          <h4 className='font-semibold'>06 jul 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Project as you can</h2>
        <p className='text-sm mt-2 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos quidem quae, doloribus eveniet quaerat velit adipisci aperiam molestiae aliquam voluptates eius consequuntur. Earum libero autem molestiae ex neque, fugit, aliquid, nisi unde maxime voluptate quia adipisci amet ratione!
        </p>
      </div>
    </div>
  )
}

export default TaskList