import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataLoaded } from "./redux/ducks/dataLoad";
import { retrieveData } from "./Components/Features/dataRetrieval";
import Loading from "./Components/Loading";

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
import "./Components/Routes/WWDComp.css";

import Navbar from "./Components/Navbar";
import Navslider from "./Components/Navslider";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  const dispatch = useDispatch();
  const dataHasLoaded = useSelector(state => state.dataLoad.dataLoaded);

  // retrieveData(() => {
  //   dispatch(dataLoaded());
  // });

  useEffect(() => {
    retrieveData(() => {
      dispatch(dataLoaded());
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {dataHasLoaded ? <React.Fragment><Navbar /><Navslider /><MainContent /><Footer /></React.Fragment> : <Loading />}
        {/* <Navbar />
        <Navslider />
        <MainContent />
        <Footer /> */}
      </header>
    </div>
  );
}

export default App;
