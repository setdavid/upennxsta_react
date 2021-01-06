import { combineReducers, createStore } from "redux";
import navsliderReducer from "./ducks/navslider";
import navbarReducer from "./ducks/navbar";

const reducer = combineReducers({
    navslider: navsliderReducer,
    navbar: navbarReducer
});

const store = createStore(reducer);

export default store;