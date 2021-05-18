import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { dataLoaded } from "./redux/ducks/dataLoad";

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
import { retrieveData } from "./Components/Features/dataRetrieval";

function App() {
  const dispatch = useDispatch();
  const dataHasLoaded = useSelector(state => state.dataLoad.dataLoaded);

  console.log("not yet finished!: " + dataHasLoaded)
  retrieveData(() => {  
    dispatch(dataLoaded());
    console.log("finished!: " + dataHasLoaded);
  });


  // if () {

  // }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Navslider />
        { dataHasLoaded ? <MainContent></MainContent> : <div style={{fontSize: "100px"}}>loading</div>}

        {/* <MainContent /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
