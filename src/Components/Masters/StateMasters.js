import React, { useEffect, useRef } from "react";
import { states } from "../../Constants/states";
import { useDispatch, useSelector } from "react-redux";
import { addAllStates, addState, removeState } from "../../Redux/statesSlice";

const StateMasters = () => {
  const dispatch = useDispatch();
  const stateName = useRef(null)
  const stateCode = useRef(null)

  const stateAddAll = ()=>{
    dispatch(addAllStates(states))
  }
  const stateAdd = ()=>{
    dispatch(addState({name:stateName.current.value,code:stateCode.current.value}))
    stateName.current.value = "";
    stateCode.current.value = "";
  }
  const stateDelete = (i)=>{
    dispatch(removeState(i))
  }

  useEffect(()=>{
    stateAddAll()
  },[])

  const reduxStates = useSelector((store)=>{return store.states?.states})
  if(!reduxStates) return;

  return (
    <div className="col-start-3 col-end-11 overflow-hidden pt-28">
      <div className="max-h-96 overflow-y-auto">
        <table className=" min-w-full bg-white shadow-xl rounded-md border">
          {/* Table Header */}
          <thead className="bg-gray-700 text-white ">
            <tr>
              <th className="sticky top-0 py-2 px-4 text-left bg-gray-700">
                State
              </th>
              <th className="sticky top-0 py-2 px-4 text-left bg-gray-700">
                Code
              </th>
              <th className="sticky top-0 py-2 px-4 text-left bg-gray-700">
                
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {reduxStates.map((name,index) => (
              <tr key={name.code} className="hover:bg-gray-100 border-b">
                <td className="py-2 px-4">{name.name}</td>
                <td className="py-2 px-4">{name.code}</td>
                <td className="py-2 px-4">
                    <button className="bg-blue-200 px-4 py-1 rounded-md hover:bg-blue-300" value={index}>Edit</button>
                    <button onClick={()=>stateDelete(index)} className="hover:bg-red-400 p-1 rounded-md ml-3" value={index}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-12 w-full">
           <input ref={stateName} type="text" placeholder="Enter state name" className="col-span-5 p-2 bg-stone-50"></input>
           <input ref={stateCode} type="text" placeholder="Enter state code" className="col-span-5 p-2 bg-stone-50 mx-1"></input>
           <button onClick={()=>{stateAdd()}} className="col-span-2 bg-teal-400 hover:bg-teal-500 p-2 rounded-md">Add</button>
        </form>
      </div>
    </div>
  );
};

export default StateMasters;
