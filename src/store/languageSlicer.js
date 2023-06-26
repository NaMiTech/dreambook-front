import { createSlice } from '@reduxjs/toolkit';
export const languageSlicer = createSlice({
    name: 'language',
    initialState:{
        selectedLanguage: "ESP",
    },

    reducers:{
        setLanguage: (state, action)=>{
            //console.log("GUARDANDO: ");
            state.selectedLanguage = action.payload
        }, 
    },
});

export const {setLanguage} = languageSlicer.actions;
export default languageSlicer.reducer