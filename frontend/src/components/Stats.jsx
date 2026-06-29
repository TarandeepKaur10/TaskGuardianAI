function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="cards">

      <div className="card">
        <h3>📋 Total Tasks</h3>
        <h1>{total}</h1>
      </div>

      <div className="card">
        <h3>✅ Completed</h3>
        <h1>{completed}</h1>
      </div>

      <div className="card">
        <h3>⏳ Pending</h3>
        <h1>{pending}</h1>
      </div>

    </div>
  );
}

export default Stats;