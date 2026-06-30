import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function AIPlanner() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!goal.trim()) {
      alert("Please enter your goal.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://taskguardianai-backend.onrender.com/generate-plan",
        {
          goal: goal,
        }
      );

      setPlan(response.data.plan);
    } catch (error) {
      console.error(error);
      alert("Failed to generate AI plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">

      <h2>🤖 AI Planner</h2>

      <input
        type="text"
        placeholder="What do you want to accomplish today?"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button
        style={{marginTop: "15px",
    width: "100%",
    fontWeight: "600", }}
        onClick={generatePlan}
        disabled={loading}
      >
        {loading ? (
    <>🤖 Generating your personalized schedule...</>
) : (
    "Generate AI Plan"
)}
      </button>
{plan && (
  <button
    style={{
      marginTop: "10px",
      width: "100%",
      background: "#ef4444",
      color: "white",
    }}
    onClick={() => {
      setGoal("");
      setPlan("");
    }}
  >
    Clear Plan
  </button>
)}

{plan && (
  <div className="ai-response">
    <ReactMarkdown>
      {plan}
    </ReactMarkdown>
  </div>
)}
    </div>
  );
}

export default AIPlanner;