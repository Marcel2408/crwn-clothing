import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
