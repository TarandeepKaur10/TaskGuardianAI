import "./App.css";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardCards from "./components/DashboardCards";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import AIInsights from "./components/AIInsights";
import AIPlanner from "./components/AIPlanner";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete DBMS Assignment",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "React Project",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare Interview",
      priority: "Low",
      completed: true,
    },
  ]);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div id="dashboard">
          <Hero />
        </div>

        <DashboardCards tasks={tasks} />

        <div className="content">

          <div className="left-panel">

            <TaskForm addTask={addTask} />

            <div id="tasks">
              <TaskTable
                tasks={filteredTasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            </div>

          </div>

          <div className="right-panel">

            <div id="analytics">
              <AIInsights />
            </div>

            <div id="planner">
              <AIPlanner />
            </div>

          </div>

        </div>

        <div id="footer">
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default App;