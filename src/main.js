import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./components/counting"
function App(){
    return(
        <>
        <Counting/>

        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);