import PatientCard from "./PatientCard";

function PatientsList({ data, loading, error, onSelectPatient }) {
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

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 p-4">
      <div className="space-y-4">
        {data.length === 0 ? (
          <div className="text-center text-gray-500">No patients found.</div>
        ) : (
          data.map((patient, index) => {
            if (!patient.name) return null;

            return (
              <div
                key={index}
                onClick={() => onSelectPatient(index)}
                className="cursor-pointer"
              >
                <PatientCard
                  
                  image={patient.profile_picture}
                  name={patient.name}
                  age={patient.age}
                  gender={patient.gender}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PatientsList;
