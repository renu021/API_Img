import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";

import Home from "./route/Home";
import Explore from "./route/Explore";
import Login from "./route/Login";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </>
    </div>
  );
}

export default App;
