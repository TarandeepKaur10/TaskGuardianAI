function DashboardCards({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const urgent = tasks.filter(t => t.priority === "High").length;

  return (

    <div className="dashboard-cards">

      <div className="stat-card red">
        <h3>🔥 Urgent</h3>
        <h1>{urgent}</h1>
        <p>High Priority Tasks</p>
      </div>

      <div className="stat-card blue">
        <h3>🗓 Total Tasks</h3>
        <h1>{total}</h1>
        <p>Current Tasks</p>
      </div>

      <div className="stat-card green">
        <h3>✅ Completed</h3>
        <h1>{completed}</h1>
        <p>Tasks Finished</p>
      </div>

      <div className="stat-card purple">
        <h3>⏳ Pending</h3>
        <h1>{pending}</h1>
        <p>Remaining Tasks</p>
      </div>

    </div>

  );
}

export default DashboardCards;