import { useDispatch, useSelector } from "react-redux";
import { Increment,Decrement,Reset } from "./slicer1";

export default function Counting(){
    const count=useSelector((state)=>state.slice1.count);
    const dispatch=useDispatch();
    return (
        <>
        <h1>Count is:{count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}
// this is due to useSelector hook=>it gives us global state
// state is a global obj that stores all variables 
// const state={
//     slice1:{
//         count:0
//     },
//     slice2{
//         count:2
//     }
// }