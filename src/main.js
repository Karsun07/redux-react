import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./components/counting";
import { Provider } from "react-redux";
import stores from "./components/stores"
import { reactSlicer } from "./components/slicer1";
import CustomCounter from "./components/customcounter";
function App(){
    console.log(reactSlicer);
   
    return(
        <>
        <Provider store={stores}>
        <Counting/>
        <br></br>
        <br></br>
        <CustomCounter/>
        </Provider>
        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);