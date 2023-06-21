import { createSlice } from '@reduxjs/toolkit';
export const dateSlice = createSlice({
    name: 'date',
    initialState:{
        day:null,
        month: null,
        year: 2023
    },

    reducers:{
        setDate: (state, payload) =>{
            state.day   = payload.day;
            state.month = payload.month;
            state.year  = payload.year;
        },
        setYear: (state, action)=>{

            state.year = action.payload

        }, 

        setMonth: (state, action)=>{

            state.month = action.payload

        },
        setDay: (state, action)=>{

            state.day = action.payload

        },
    },
});

export const {setDate, setYear, setMonth, setDay} = dateSlice.actions;
export default dateSlice.reducer