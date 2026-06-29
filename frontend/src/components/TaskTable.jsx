import { FaTrash, FaCheckCircle } from "react-icons/fa";

function TaskTable({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="task-table">

      <div className="table-header">
        <h2>Today's Tasks</h2>
        <button className="add-btn">+ New Task</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr key={task.id}>

              <td>{task.title}</td>

              <td>
                <span className={`priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </td>

              <td>
                {task.completed ? (
                  <span className="completed">
                    Completed
                  </span>
                ) : (
                  <span className="pending">
                    Pending
                  </span>
                )}
              </td>

              <td>

                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(task.id)}
                >
                  <FaCheckCircle />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TaskTable;