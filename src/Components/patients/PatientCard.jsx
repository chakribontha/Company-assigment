
const PatientCard = ({ image, name, age, gender }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
      <img
        src={image || "https://via.placeholder.com/80"}
        alt={`${name}'s profile`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          {gender}, {age}
        </p>
      </div>
    </div>
  );
};

export default PatientCard;
