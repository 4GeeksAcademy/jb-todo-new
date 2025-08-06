import { useState } from 'react';
import TaskList from './components/TaskList.jsx';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [draft, setDraft] = useState('');

  /* add on Enter key or button click */
  const addTask = () => {
    const text = draft.trim();
    if (!text) return;
    setTasks(t => [...t, text]);
    setDraft('');
  };

  const deleteTask = idx =>
    setTasks(t => t.filter((_, i) => i !== idx));

  return (
    <div className="todo-shell">
      <h1 className="title">Todo List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
