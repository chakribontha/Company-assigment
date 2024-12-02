import React from "react";
import DiagnosisListCard from "./DiagnosisListCard";

function DiagnosisList({ data, index }) {
  const diagnosticList = data[index]?.diagnostic_list || [];

  if (diagnosticList.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No diagnostic records available.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-semibold text-gray-700">
              Problem
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700">
              Description
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.map((diagnosis, idx) => (
            <DiagnosisListCard
              key={idx}
              problem={diagnosis.name}
              description={diagnosis.description}
              status={diagnosis.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiagnosisList;
