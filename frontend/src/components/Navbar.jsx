import { FaSearch, FaRobot, FaUserCircle } from "react-icons/fa";

function Navbar({ searchTerm, setSearchTerm }) {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="navbar">

      <div className="logo">
        <h2>🚀 TaskGuardian AI</h2>
        <p>AI Productivity Companion</p>
        <small>{today}</small>
      </div>

      <div className="nav-actions">

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <button
  className="ai-btn"
  onClick={() =>
    document
      .getElementById("planner")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  <FaRobot />
  AI Assistant
</button>

        <button
  className="profile-btn"
  onClick={() =>
    alert(
      "👤 User: Tara\n🚀 TaskGuardian AI\nVersion 1.0"
    )
  }
>
  <FaUserCircle />
  Tara
</button>

      </div>

    </div>
  );
}

export default Navbar;