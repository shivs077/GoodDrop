import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";

//const Index = () => {
//  return <div>Hello React!</div>;
//};
//
//ReactDOM.render(<Index />, document.getElementById("index"));



//const App = () => {
//  return <div>Hello React! </div>;
//};

window.React=React;

ReactDOM.render(<App/>, document.getElementById("index")
);
