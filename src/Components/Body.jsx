import { useState } from "react";
import useFetchUserData from "../hooks/useFetchUserData";
import Diagnosis from "./Diagnosis/DiagnosisHistory";
import PatientsList from "./patients/PatientsList";
import LabResultsList from "./ProfileDetails/LabResultsList";
import Profile from "./ProfileDetails/profile";

function Body() {
  const API_URL = import.meta.env.VITE_API_URL;
  const username = import.meta.env.VITE_API_USERNAME;
  const password = import.meta.env.VITE_API_PASSWORD;
  const { data, loading, error } = useFetchUserData(
    API_URL,
    username,
    password
  );

  const [selectedIndex, setSelectedIndex] = useState(3); 

  const handleSelectPatient = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-row h-screen m-4">
      <div className="basis-1/4 ">
        <div className="flex flex-row justify-between m-4">
          <h1 style={{ fontSize: "24px" }}>Patients</h1>
          <img
            
            width="28px"
            height="18px"
            src="/src/assets/search_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="search"
          />
        </div>
        <PatientsList
          data={data}
          loading={loading}
          error={error}
          onSelectPatient={handleSelectPatient}
        />
      </div>

      <div className="basis-1/2  ml-4 mr-4">
        <Diagnosis
          data={data}
          loading={loading}
          error={error}
          index={selectedIndex}
        />
      </div>

      <div className="basis-1/4  flex flex-col">
        <div className="flex-1 border-b">
          <Profile data={data} index={selectedIndex} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <LabResultsList data={data} index={selectedIndex} />
        </div>
      </div>
    </div>
  );
}

export default Body;
