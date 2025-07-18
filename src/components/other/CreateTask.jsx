import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Tilte</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design,Dev,React etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 mb-4"></textarea>
          <button className="bg-emerald-500 py-2 px-4 hover:bg-emerald-600 rounded text-md w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask