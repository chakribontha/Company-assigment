import React from "react";

function Profile({ data, index }) {
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  const profile = data[index];


  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
    
      <div className="text-center mb-6">
        <img
          src={profile.profile_picture || "/default-avatar.png"}
          alt="profile"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          {profile.name}
        </h1>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/BirthIcon@2x.png"
            alt="Date of Birth Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-gray-800 font-medium">{profile.date_of_birth}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/BirthIcon@2x.png"
            alt="Gender Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-gray-800 font-medium">{profile.gender}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/BirthIcon@2x.png"
            alt="Contact Info Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm text-gray-500">Contact Info</p>
            <p className="text-gray-800 font-medium">{profile.phone_number}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/BirthIcon@2x.png"
            alt="Emergency Contacts Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm text-gray-500">Emergency Contacts</p>
            <p className="text-gray-800 font-medium">
              {profile.emergency_contact}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/BirthIcon@2x.png"
            alt="Insurance Provider Icon"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm text-gray-500">Insurance Provider</p>
            <p className="text-gray-800 font-medium">
              {profile.insurance_type}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 px-4 rounded-md shadow">
          Show All Information
        </button>
      </div>
    </div>
  );
}

export default Profile;
