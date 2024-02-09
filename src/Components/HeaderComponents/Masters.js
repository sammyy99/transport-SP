// Masters.js
import React from 'react';
import { Link } from 'react-router-dom';

const Masters = () => {
  return (
    <div className="h-screen p-4 pt-24 bg-gray-800 text-white">
      <div className="text-2xl font-bold mb-12">Masters</div>
      <ul className="flex flex-col space-y-4 text-md">
        <Link to="state" className="hover:text-blue-500 transition duration-300">
          State
        </Link>
        <Link to="stations" className="hover:text-blue-500 transition duration-300">
          Stations
        </Link>
        <Link to="groups" className="hover:text-blue-500 transition duration-300">
          Groups
        </Link>
        <Link to="accounts" className="hover:text-blue-500 transition duration-300">
          Accounts
        </Link>
        <Link to="mobile" className="hover:text-blue-500 transition duration-300">
          Mobile Update
        </Link>
        <Link to="exit" className="hover:text-blue-500 transition duration-300">
          Exit
        </Link>
      </ul>
    </div>
  );
};

export default Masters;
