function Dashboard() {
  return (

    <div className="dashboard">

      <div className="dashboard-card red">

        <h3>🔥 Urgent</h3>

        <h1>2</h1>

        <p>Assignments due today</p>

      </div>

      <div className="dashboard-card blue">

        <h3>📅 Today's Tasks</h3>

        <h1>7</h1>

        <p>Planned by AI</p>

      </div>

      <div className="dashboard-card green">

        <h3>✅ Completed</h3>

        <h1>5</h1>

        <p>Great progress</p>

      </div>

      <div className="dashboard-card purple">

        <h3>⚡ Focus Time</h3>

        <h1>4h</h1>

        <p>Remaining today</p>

      </div>

    </div>

  );
}

export default Dashboard;