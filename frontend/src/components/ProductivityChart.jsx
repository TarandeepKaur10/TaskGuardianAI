import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ProductivityChart() {

  const data = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "Productivity",
        data: [45,60,55,75,70,85,90],
        borderColor: "#4f8cff",
        backgroundColor: "rgba(79,140,255,.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#2d3654",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#2d3654",
        },
      },
    },
  };

  return (
    <div className="card">

      <h2>📈 Productivity Analytics</h2>

      <Line
        data={data}
        options={options}
      />

    </div>
  );
}

export default ProductivityChart;