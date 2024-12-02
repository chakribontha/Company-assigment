import React from "react";

function DiagnosisListCard({ problem, description, status }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-800">{problem}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{description}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{status}</td>
    </tr>
  );
}

export default DiagnosisListCard;
