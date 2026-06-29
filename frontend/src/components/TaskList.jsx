function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div>
              <h3
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </h3>

              <span
                className={`priority ${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>
            </div>

            <div className="task-buttons">
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;