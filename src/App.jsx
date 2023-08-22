import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { initialTasks } from "./data";
import "./style.css";
import { useEffect, useState } from "react";

export default function App() {
  // theme toggle
  const [lightTheme, setLightTheme] = useState("false");
  useEffect(() => setLightTheme(false), []);
  function toggleTheme() {
    setLightTheme(!lightTheme);
  }

  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return JSON.parse(localValue) ?? initialTasks;
  });
  // save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  console.log(tasks);

  function toggleTask(id, completed) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function clearCompleted() {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.completed === false);
    });
  }
  console.log(tasks);
  return (
    <main className={lightTheme === true ? "light" : "dark"}>
      <div className="app-body">
        <header>
          <span className="logo">TODO</span>
          <div className="theme-toggle-button" onClick={toggleTheme}>
            {!lightTheme && <img src="/images/icon-sun.svg" alt="sun" />}
            {lightTheme && <img src="/images/icon-moon.svg" alt="moon" />}
          </div>
        </header>
        <NewTaskForm onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          clearCompleted={clearCompleted}
        />
      </div>
    </main>
  );
}
