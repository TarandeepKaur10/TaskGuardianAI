import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
    setPriority("Medium");
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button type="submit">Add Task</button>

      </form>
    </div>
  );
}

export default TaskForm;