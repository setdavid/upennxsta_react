import { combineReducers, createStore } from "redux";
import navsliderReducer from "./ducks/navslider";
import navbarReducer from "./ducks/navbar";
import dataLoadReducer from "./ducks/dataLoad";

const reducer = combineReducers({
    navslider: navsliderReducer,
    navbar: navbarReducer,
    dataLoad: dataLoadReducer
});

const store = createStore(reducer);

export default store;