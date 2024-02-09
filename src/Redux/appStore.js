import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./statesSlice"

const appStore = configureStore(
    {
        reducer:{
            states: statesReducer,
        }
    }
)

export default appStore