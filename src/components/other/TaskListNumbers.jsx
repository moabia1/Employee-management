import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskListNumbers = () => {
  const {userData} = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const employees = userData.employee.find((e) => e.email == loggedInUser.email);
  const tasks = employees.taskCount;
  return (
    <div className="flex mt-10 justify-between screen gap-5">
      <div className="w-[45%] py-6 px-9 bg-cyan-200 rounded-xl">
        <h2 className="text-3xl font-semibold text-teal-600">{tasks.active}</h2>
        <h3 className=" text-xl font-medium text-teal-600">Active Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-yellow-300 rounded-xl">
        <h2 className="text-3xl font-semibold text-amber-700">
          {tasks.newTask}
        </h2>
        <h3 className=" text-xl font-medium text-amber-700">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9   bg-green-300 rounded-xl">
        <h2 className="text-3xl font-semibold text-green-800">
          {tasks.completed}
        </h2>
        <h3 className=" text-xl font-medium text-green-800">Completed Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-red-300 rounded-xl">
        <h2 className="text-3xl font-semibold text-red-800">{tasks.failed}</h2>
        <h3 className=" text-xl font-medium text-red-800">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers