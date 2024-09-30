import { configureStore } from "@reduxjs/toolkit";
import employeslice from "./employeslice";

const store=configureStore({
    reducer: {
        employeReducer:employeslice
    }
})

export default store