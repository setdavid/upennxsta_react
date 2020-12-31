import React from "react";
// import './App.css';

import Navbar from "./Components/Navbar";
import Navslider from "./Components/Navslider";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Navslider />
        {/* <MainContent /> */}
      </header>
    </div>
  );
}

export default App;
