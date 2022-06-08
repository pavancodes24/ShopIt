import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
