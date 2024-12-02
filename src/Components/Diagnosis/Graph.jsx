import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Graph({ data, index }) {
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [timeRange, setTimeRange] = useState("3 years");

  useEffect(() => {
    if (data[index] && data[index].diagnosis_history) {
      filterData(data[index].diagnosis_history, timeRange);
    }
  }, [data, index, timeRange]);

  const filterData = (history, range) => {
    const currentDate = new Date();
    let filtered = history;

    if (range === "1 year") {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
      filtered = history.filter(
        (entry) => new Date(`${entry.month} 1, ${entry.year}`) >= oneYearAgo
      );
    } else if (range === "3 years") {
      const threeYearsAgo = new Date();
      threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);
      filtered = history.filter(
        (entry) => new Date(`${entry.month} 1, ${entry.year}`) >= threeYearsAgo
      );
    } else if (range === "5 years") {
      const fiveYearsAgo = new Date();
      fiveYearsAgo.setFullYear(currentDate.getFullYear() - 5);
      filtered = history.filter(
        (entry) => new Date(`${entry.month} 1, ${entry.year}`) >= fiveYearsAgo
      );
    }

    setFilteredHistory(filtered);
  };

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
  };

  const chartData = {
    labels:
      filteredHistory.length > 0
        ? filteredHistory.map(
            (entry) => `${entry.month.slice(0, 3)} ${entry.year}`
          )
        : [],
    datasets: [
      {
        label: "Systolic",
        data: filteredHistory.map(
          (entry) => entry.blood_pressure.systolic.value
        ),
        borderColor: "#C84EFF",
        backgroundColor: "rgba(200, 78, 255, 0.1)",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 6,
        pointBackgroundColor: "#C84EFF",
      },
      {
        label: "Diastolic",
        data: filteredHistory.map(
          (entry) => entry.blood_pressure.diastolic.value
        ),
        borderColor: "#5C77FF",
        backgroundColor: "rgba(92, 119, 255, 0.1)",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 6,
        pointBackgroundColor: "#5C77FF",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { usePointStyle: true } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Months" } },
      y: {
        title: { display: true, text: "Blood Pressure (mmHg)" },
        min: 60,
        max: 180,
      },
    },
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3>Blood Pressure History</h3>
        <div>
          <label htmlFor="timeRange">Select Time Range: </label>
          <select
            id="timeRange"
            value={timeRange}
            onChange={handleTimeRangeChange}
          >
            <option value="1 year">Last 1 year</option>
            <option value="3 years">Last 3 years</option>
            <option value="5 years">Last 5 years</option>
          </select>
        </div>
      </div>
      {filteredHistory.length === 0 ? (
        <p>No data available for this time range.</p>
      ) : (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  );
}

export default Graph;
