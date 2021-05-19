import React from "react";

//Essential CSS
import "./css/bootstrap-grid.min.css";
import "./css/base-styles.css";
import "./css/transition-group.css"

//Primary page components CSS
import "./Components/Navbar.css";
import "./Components/Navslider.css";
import "./Components/Footer.css";

//Feature components CSS
import "./Components/Features/ResponsiveImage.css";
import "./Components/Features/TextOverImage.css";
import "./Components/Features/Jumbotron.css";
import "./Components/Features/Slideshow.css";
import "./Components/Features/ColoredCard.css";
import "./Components/Features/RoundedButton.css"

//Route components CSS
import "./Components/Routes/Home.css";

//Route components
import "./Components/Routes/WhatWeveDoneComps/WhatWeveDoneComp.css";

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
