import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg fixed w-screen">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
        <div className="text-3xl font-extrabold">Solution Point</div>
        <ul className="flex space-x-4 text-lg">
          <Link to="masters" className="hover:text-blue-500 transition duration-300">Masters</Link>
          <Link to="vouchers" className="hover:text-blue-500 transition duration-300">Vouchers</Link>
          <Link to="ac-reports" className="hover:text-blue-500 transition duration-300">A/C Reports</Link>
          <Link to="maintenance" className="hover:text-blue-500 transition duration-300">Maintenance</Link>
          <Link to="help" className="hover:text-blue-500 transition duration-300">Help</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
