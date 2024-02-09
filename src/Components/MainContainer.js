import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StateMasters from './Masters/StateMasters'
import Groups from './Masters/StateMasters'

const MainContainer = () => {
  return (
    <div className='col-span-10 grid grid-cols-12'>
      <Routes>
        <Route path='masters/state/*' element={<StateMasters/>}></Route>
        <Route path='masters/groups/*' element={<Groups/>}></Route>
      </Routes>
    </div>
  )
}

export default MainContainer
