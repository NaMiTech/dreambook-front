import { configureStore } from "@reduxjs/toolkit";
import { dateSlice } from "./dateSlicer";
import {languageSlicer} from "./languageSlicer";

export const store = configureStore({
    reducer:{
        date: dateSlice.reducer,
        language: languageSlicer.reducer
    }
})