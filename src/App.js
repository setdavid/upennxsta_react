import React from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./Components/Navbar";
import Navslider from "./Components/Navslider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Navslider />
      </header>
    </div>
  );
}

export default App;
