import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaRobot,
  FaChartBar,
  FaCog,
  FaBell,
} from "react-icons/fa";

function Sidebar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="sidebar">

      <div
        className="sidebar-logo"
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("dashboard")}
      >
        🚀
        <h2>TaskGuardian</h2>
      </div>

      <ul>

        <li
          className="active"
          onClick={() => scrollToSection("dashboard")}
          style={{ cursor: "pointer" }}
        >
          <FaHome />
          Dashboard
        </li>

        <li
          onClick={() => scrollToSection("tasks")}
          style={{ cursor: "pointer" }}
        >
          <FaTasks />
          Tasks
        </li>

        <li
          onClick={() => scrollToSection("tasks")}
          style={{ cursor: "pointer" }}
        >
          <FaCalendarAlt />
          Schedule
        </li>

        <li
          onClick={() => scrollToSection("planner")}
          style={{ cursor: "pointer" }}
        >
          <FaRobot />
          AI Planner
        </li>

        <li
          onClick={() => scrollToSection("analytics")}
          style={{ cursor: "pointer" }}
        >
          <FaChartBar />
          Analytics
        </li>

        <li
          onClick={() => scrollToSection("footer")}
          style={{ cursor: "pointer" }}
        >
          <FaBell />
          Reminders
        </li>

        <li
          onClick={() => scrollToSection("footer")}
          style={{ cursor: "pointer" }}
        >
          <FaCog />
          Settings
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;