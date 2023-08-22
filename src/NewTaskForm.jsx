import { useState } from "react";

export default function NewTaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return;
    onSubmit(newTask);
    setNewTask("");
  }

  return (
    <form className="newTask" onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input
        type="text"
        placeholder="Create a new todo…"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        id="task"
      />
    </form>
  );
}
