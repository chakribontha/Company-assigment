import React from "react";

const Header = () => {
  return (
    <header className="w-full z-50 flex justify-between items-center px-6 py-3 bg-white shadow-md rounded-xl m-5 ">
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/TestLogo@2x.png"
          alt="Logo"
          className="w-[210.58px] h-[48px]"
        />
      </div>

   
      <nav className="flex space-x-6">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <img
            src="/src/assets/home_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
          <span className="ml-1 ">Overview</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center bg-green-100 px-3 py-1 rounded-lg"
        >
          <img
            src="/src/assets/group_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
          <span className="ml-1">Patients</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <img
            src="/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
          <span className="ml-1">Schedule</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <img
            src="/src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
          <span className="ml-1">Message</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <img
            src="/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
          <span className="ml-1">Transactions</span>
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img
            src="/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2 text-right">
            <p className="text-sm font-semibold text-gray-800">
              Dr. Jose Simmons
            </p>
            <p className="text-xs text-gray-500">General Practitioner</p>
          </div>
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <img
            src="/src/assets/settings_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Home"
            className="w-[15.51px] h-[17px]"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
