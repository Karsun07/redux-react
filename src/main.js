import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./components/counting";
import { Provider } from "react-redux";
import stores from "./components/stores"
import { reactSlicer } from "./components/slicer1";
function App(){
    console.log(reactSlicer);
   
    return(
        <>
        <Provider store={stores}>
        <Counting/>
        </Provider>
        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);