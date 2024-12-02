import React from "react";

function LabResultsCard({ result }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-2 rounded-lg shadow">
      <div className="text-gray-800">{result || "No lab result available"}</div>
      <div>
       
        <img
          src="/src/assets/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png"
          alt="Download"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}

export default LabResultsCard;
