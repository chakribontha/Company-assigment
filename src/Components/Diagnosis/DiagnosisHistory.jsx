import Graph from "./Graph";
import DiagnosisHistoryListCard from "./DiagnosisHistoryListCard";
import DiagnosisList from "./DiagnosisList";

function DiagnosisHistory({ data, loading, error, index }) {
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );
  }

  const patientData = data[index];
  if (!patientData) {
    return (
      <div className="h-screen flex items-center justify-center">
        No patient data available.
      </div>
    );
  }


  const latestDiagnosis = patientData.diagnosis_history?.[0]; 

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4  flex-1  h-[400px]">
        <Graph data={data} index={index} />
      </div>

      <div className="flex-1  flex justify-around mt-4">
        <DiagnosisHistoryListCard
          color={"#E0F3FA"}
          image={"/src/assets/respiratory rate@2x.png"}
          value={latestDiagnosis?.respiratory_rate?.value}
          level={latestDiagnosis?.respiratory_rate?.levels}
        />
        <DiagnosisHistoryListCard
          color={"#F7D2C4"}
          image={"/src/assets/temperature@2x.png"}
          value={latestDiagnosis?.temperature?.value}
          level={latestDiagnosis?.temperature?.levels}
        />
        <DiagnosisHistoryListCard
          color={"#E8F8F5"}
          image={"/src/assets/HeartBPM@2x.png"}
          value={latestDiagnosis?.heart_rate?.value}
          level={latestDiagnosis?.heart_rate?.levels}
        />
      </div>

      <div className="flex-1 overflow-y-auto mt-5">
        <h2 className="text-center font-bold py-2">Diagnostic List</h2>
        <DiagnosisList data={data} index={index} />
      </div>
    </div>
  );
}

export default DiagnosisHistory;

