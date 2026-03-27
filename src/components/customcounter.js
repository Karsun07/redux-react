import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./slicer1";

export default function CustomCounter(){
    const [number,setNumber]=useState("");
    const dispatch=useDispatch();
    function handleclick(){
        dispatch(CustomIncreaser(Number(number)));
        setNumber("");
    }
    return(
        <>
        <input placeholder="enter number" type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={handleclick}>Enter</button>
        </>
    )
}