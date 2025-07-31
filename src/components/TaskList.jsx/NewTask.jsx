import React from "react";

const NewTask = ({ task, userData, setUserData }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleAccept = () => {
    const updatedData = JSON.parse(JSON.stringify(userData)); // deep copy

    const employee = updatedData?.employee?.find((e) => e.email === user.email);

    if (!employee) return;

    const selectedTask = employee.tasks.find((t) => t.id === task.id);


    if (selectedTask && selectedTask.newTask) {
      selectedTask.newTask = false;
      selectedTask.active = true;

      // Prevent going below zero
      if (employee.taskCount.newTask > 0) {
        employee.taskCount.newTask--;
      }

      employee.taskCount.active++;
    }

    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  return (
    <div className="flex-shrink-0 h-full bg-yellow-300 w-[25%] rounded-xl p-3 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm font-semibold px-2 py-1 rounded">
          {task?.category}
        </h3>
        <h4 className="font-semibold">{task?.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
      <p className="text-sm mt-2 ">{task?.description}</p>
      <div className="mt-20 rounded text-sm bg-cyan-600 px-2 py-1 ml-45 text-center">
        <button onClick={handleAccept}>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
