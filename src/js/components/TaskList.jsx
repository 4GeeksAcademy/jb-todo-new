import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0)
    return <p className="empty-msg">No tasks, add a task</p>;

  return (
    <ul className="task-list">
      {tasks.map((t, i) => (
        <TaskItem
          key={i}
          text={t}
          onDelete={() => onDelete(i)}
        />
      ))}
    </ul>
  );
}
