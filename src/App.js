import React from "react";
// import './App.css';

import Navbar from "./Components/Navbar";
import Navslider from "./Components/Navslider";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Navslider />
        <MainContent />
        <Footer />
      </header>
    </div>
  );
}

export default App;
