import React from "react";
import Accordian from "./Components"; 
import data from "./Components/data"; 
import "./Components/style.css"
function App() {
  return (
    <>
      {/* Accordion */}
      <Accordian data={data} /> {/* Pass the data prop to the Accordion component */}
    </>
  );
}

export default App;
