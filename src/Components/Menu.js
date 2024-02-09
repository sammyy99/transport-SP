// Menu.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Masters from "./HeaderComponents/Masters";
import Vouchers from "./HeaderComponents/Vouchers";
import ACReports from "./HeaderComponents/ACReports";
import Maintenance from "./HeaderComponents/Maintenance";
import Help from "./HeaderComponents/Help";

const Menu = () => {
  return (
    <div className='col-span-2 bg-gray-800'>
      <div className=''>
      <Routes> 
          <Route path="masters/*" element={<Masters />} />
          <Route path="vouchers/*" element={<Vouchers />} />
          <Route path="ac-reports/*" element={<ACReports />} />
          <Route path="maintenance/*" element={<Maintenance />} />
          <Route path="help/*" element={<Help />} />
      </Routes>
      </div>
    </div>
  );
};

export default Menu;
