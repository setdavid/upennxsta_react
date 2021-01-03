import React from "react";

//Essential CSS
import "./css/bootstrap-grid.min.css";
import "./css/base-styles.css";

//Primary page components CSS
import "./css/navbar.css";
import "./css/navslider.css";
import "./css/footer.css";

//Feature components CSS
import "./css/text-over-image.css";
import "./css/jumbotron.css";

//Route components CSS
import "./css/home.css";

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
