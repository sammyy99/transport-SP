// MainContainer.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StateMasters from './Masters/StateMasters';
import Groups from './Masters/Groups';
import Accounts from './Masters/Accounts';
import Stations from './Masters/Stations'
import MobileUpdate from './Masters/MobileUpdate'

const MainContainer = () => {
  return (
    <div className='col-span-10 grid grid-cols-12'>
      <Routes>
        <Route path='masters/*'>
        <Route path='state/*' element={<StateMasters />} />
        <Route path='groups/*' element={<Groups />} />
        <Route path='accounts/*' element={<Accounts />} />
        <Route path='stations/*' element={<Stations />} />
        <Route path='mobile/*' element={<MobileUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainContainer;
