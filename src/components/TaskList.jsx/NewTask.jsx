import React from 'react'

const NewTask = ({task}) => {
  return (
    <div
      id="tasklist-child"
      className="flex-shrink-0 h-full bg-green-300 w-[25%] rounded-xl p-3 overflow-y-auto"
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm font-semibold px-2 py-1 rounded">
          {task?.category}
        </h3>
        <h4 className="font-semibold">{task?.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
      <p className="text-sm mt-2 ">{task?.description}</p>
      <div className="mt-2">
        <button>Accept Task</button>
      </div>
    </div>
  );
}

export default NewTask