function DiagnosisHistoryListCard({ image, value, level, color }) {
  return (
    <div
      className="border rounded-lg w-[228px] h-[202px] rounded-[12px] m-3 p-3"
      style={{ backgroundColor: color }}
    >
      <img width="96px" height="96px" src={image} alt="Icon" />
      <h3>Respiratory Rate</h3>
      <h1>{value} bpm</h1>
      <p>{level}</p>
    </div>
  );
}

export default DiagnosisHistoryListCard;
