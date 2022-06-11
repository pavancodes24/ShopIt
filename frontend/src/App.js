import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home}  />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/login" component={Login} />

        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
