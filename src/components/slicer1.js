import { createSlice } from "@reduxjs/toolkit";

const reactSlicer=createSlice({
    name:"slicer1",
    initialState:{count:0},
    reducers:{
        // immer =>creates a draft in which we change things and then it interacts with original and replace it and we get new refernce(obj).
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0},
        CustomIncreaser:(state,action)=>{state.count+=action.payload}
    }
})
 // we found out that reactSilicer stores incrememt,decrement,reset as actions
// action obj contains=>type:slice1/increment, payload:argument of fn
// so we export them as reactSlicer.actions
// actions is useful becoz when when we dispatch the fn it tells which slice it belongs to .
export const {Increment,Decrement,Reset,CustomIncreaser}=reactSlicer.actions;
export {reactSlicer};
export default reactSlicer.reducer;