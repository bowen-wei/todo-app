export default function TaskItem({
  completed,
  id,
  title,
  toggleTask,
  deleteTask,
}) {
  return (
    <li className="taskItem" id={id}>
      <input
        type="checkbox"
        value={completed}
        onChange={(e) => toggleTask(id, e.target.checked)}
        checked={completed}
      />
      <span>{title}</span>
      <img
        src="/images/icon-cross.svg"
        alt="delete"
        onClick={() => deleteTask(id)}
      />
    </li>
  );
}
