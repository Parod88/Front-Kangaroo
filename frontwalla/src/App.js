import "./App.css";
import React from "react";
import { Routes, Route, Redirect, Link } from "react-router-dom";
import { AdvertsMainPage } from "./components/advertisements";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/index" component={AdvertsMainPage} />
      </Routes>
    </div>
  );
}

export default App;
