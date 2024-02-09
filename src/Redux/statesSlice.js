import { createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice(
    {
        name:"states",
        initialState:{
            states:null
        },
        reducers:{
            addAllStates:(state,action)=>{
                state.states = action.payload
            },
            addState:(state,action)=>{
                state.states.push(action.payload)
            },
            removeState:(state,action)=>{
                state.states.splice(action.payload,1)
            }
        }

    }
)

export default statesSlice.reducer;
export const {addAllStates,removeState,addState} = statesSlice.actions