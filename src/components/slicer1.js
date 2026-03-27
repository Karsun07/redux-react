import { createSlice } from "@reduxjs/toolkit";

const reactSlicer=createSlice({
    name:"slicer1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0}
    }
})
 // we found out that reactSilicer stores incrememt,decrement,reset as actions
// action obj contains=>type:slice1/increment, payload:undefined
// so we export them as reactSlicer.actions
// actions is useful becoz when when we dispatch the fn it tells which slice it belongs to .
export const {Increment,Decrement,Reset}=reactSlicer.actions;
export {reactSlicer};
export default reactSlicer.reducer;