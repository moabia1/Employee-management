import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = () => {
  const Usertasks = useContext(AuthContext);
  console.log(Usertasks)
  const employees = Usertasks.employee.find((e) => e.email);
  console.log(employees)
  const tasks = employees.tasks;
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start flex-nowrap h-[55%] w-full p-5 mt-10 gap-5"
    >
      {tasks.map((elem,idx) => {
        if (elem?.active) {
          return <ActiveTask key={idx} task={elem}/>
        }
        if (elem?.newTask) {
          return <NewTask key={idx} task={elem}/>
        }
        if (elem?.completed) {
          return <CompleteTask key={idx} task={elem}/>
        }
        if (elem?.failed) {
          return <FailedTask key={idx} task={elem }/>
        }
      })}
    </div>
  );
};

export default TaskList;
