import React from "react";
import Navbar from "./component/Navbar";
import AllEmployees from "./component/AllEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CreateEmployees from "./component/CreateEmployee";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllEmployees />} />
          <Route path="/createemployees" element={<CreateEmployees />} />
          {/* <Route path="/updateEmployess" element={<UpdateEmployees />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
