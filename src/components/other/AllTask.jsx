import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData)
  return (
    <div
      id="tasklist"
      className="bg-[#1C1C1C] p-5 mt-5 rounded"
    >
      <div className="bg-red-400 py-2 px-4 flex items-center justify-evenly rounded mb-3">
        <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold w-1/5">Completed Task</h5>
        <h5 className="text-lg font-semibold w-1/5">Failed Task</h5>
      </div>
      <div className="overflow-auto">
        {userData.employee.map((elem) => {
          return (
            <div className="border-2 border-emerald-600 py-2 px-4 flex items-center rounded mb-3 font-black">
              <h2 className="w-1/5 text-white font-medium">{elem.username}</h2>
              <h3 className="ml-15 w-1/5 text-blue-500">{elem.taskCount.newTask}</h3>
              <h5 className="ml-15 w-1/5 text-yellow-400">{elem.taskCount.active}</h5>
              <h5 className="ml-15 w-1/5 text-green-700">{elem.taskCount.completed}</h5>
              <h5 className="ml-15 w-1/5 text-red-500">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
