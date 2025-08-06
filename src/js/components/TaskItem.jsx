export default function TaskItem({ text, onDelete }) {
    return (
      <li className="task-item">
        {text}
        <span className="delete-icon" onClick={onDelete}>🗑️</span>
      </li>
    );
  }
  