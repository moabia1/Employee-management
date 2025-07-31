import React, { use } from 'react'

const ActiveTask = ({ task, userData, setUserData }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const updatedData = JSON.parse(JSON.stringify(userData));
  console.log(updatedData);

  const handleCompleted = () => {
    const employee = updatedData.employee.find((e) => e.email == user.email);
    const selectedTask = employee.tasks.find((t) => t.id == task.id);
    console.log(selectedTask)

    if (selectedTask && selectedTask.active) {
      selectedTask.active = false;
      selectedTask.completed = true;

      if (employee.taskCount.active > 0) {
        employee.taskCount.active--;
      }

      employee.taskCount.completed++;
    }
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData)
  }

  const handleFailed = () => {
    const employee = updatedData.employee.find((e) => e.email == user.email);
    const selectedTask = employee.tasks.find((t) => t.id == task.id);
    console.log(selectedTask)

    if (selectedTask && selectedTask.active) {
      selectedTask.active = false;
      selectedTask.failed = true;

      if (employee.taskCount.active > 0) {
        employee.taskCount.active--;
      }

      employee.taskCount.failed++;
    }
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData)
  }

  return (
    <div
      id="tasklist-child"
      className="flex-shrink-0 h-full bg-cyan-300 w-[25%] rounded-xl p-3 overflow-y-auto"
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm font-semibold px-2 py-1 rounded">
          {task?.category}
        </h3>
        <h4 className="font-semibold">{task?.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
      <p className="text-sm mt-2 ">{task?.description}</p>
      <div className="flex justify-between mt-20 text-sm">
        <button
          onClick={handleCompleted}
          className="bg-emerald-700 px-2 py-1 rounded">
          Mark as Completed
        </button>
        <button
          onClick={handleFailed}
          className="bg-red-700 px-2 py-1 rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default ActiveTask