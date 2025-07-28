import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { userData, setUserData } = useContext(AuthContext);

  const createTaskHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      category,
      date,
      description,
      newTask: true,
      active: false,
      failed: false,
      completed: false,
    };

    // 🔁 Update employee data
    const updatedEmployees = userData.employee.map((emp) =>
      emp.username === assignTo
        ? {
            ...emp,
            tasks: [...emp.tasks, newTask],
            taskCount: {
              ...emp.taskCount,
              newTask: emp.taskCount.newTask + 1,
            },
          }
        : emp
    );

    // ✅ Update context and localStorage
    const updatedData = { ...userData, employee: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));

    // 🔄 Reset form
    setTitle("");
    setCategory("");
    setDate("");
    setAssignTo("");
    setDescription("");
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Username"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, React etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 mb-4"
          ></textarea>
          <button
            onClick={createTaskHandler}
            className="bg-emerald-500 py-2 px-4 hover:bg-emerald-600 rounded text-md w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
