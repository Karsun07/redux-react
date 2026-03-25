import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./components/counting";
import { Provider } from "react-redux";
import stores from "./components/stores"
function App(){
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