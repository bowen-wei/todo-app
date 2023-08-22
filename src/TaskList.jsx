import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  clearCompleted,
}) {
  const [filter, setFilter] = useState("all");
  const [displayTasks, setDisplayTasks] = useState(tasks);
  function changeFilter(e) {
    setFilter(e.target.id);
  }

  useEffect(() => {
    if (filter === "all") {
      setDisplayTasks(tasks);
      return;
    }
    if (filter === "active") {
      setDisplayTasks(tasks.filter((task) => task.completed === false));
      return;
    }
    if (filter === "completed") {
      setDisplayTasks(tasks.filter((task) => task.completed === true));
      return;
    }
  });

  return (
    <>
      <ul className="taskList">
        {displayTasks.length == 0 && (
          <li style={{ textAlign: "center" }}>No task in the list</li>
        )}
        {displayTasks.map((task) => {
          return (
            <TaskItem
              {...task}
              key={task.id}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
      <div className={`footer ${filter}`}>
        <span>{displayTasks.length} items left</span>
        <div className="filter">
          <span id="all" onClick={changeFilter}>
            All
          </span>
          <span id="active" onClick={changeFilter}>
            Active
          </span>
          <span id="completed" onClick={changeFilter}>
            Completed
          </span>
        </div>
        <span className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </span>
      </div>
    </>
  );
}
