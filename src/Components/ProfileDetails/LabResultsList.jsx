import React from "react";
import LabResultsCard from "./LabResultsCard";

function LabResultsList({ data, index }) {

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }


  const user = data[index];

  if (!user || !user.lab_results || !Array.isArray(user.lab_results)) {
    return <div>No lab results found.</div>;
  }


  return (
    <div className="max-h-[500px] overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-md">
      {user.lab_results.map((result, idx) => (
        <LabResultsCard key={idx} result={result} />
      ))}
    </div>
  );
}

export default LabResultsList;
