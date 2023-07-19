import { createSlice } from "@reduxjs/toolkit";

export const DataSlice=createSlice({
    name:'cart',
    initialState:{
        data:[],
    },
    reducers:{
        addData:(state,action)=>{
            state.data=state.data.push
        },
    }

})
export const {}=DataSlice.actions
export default DataSlice.reducer