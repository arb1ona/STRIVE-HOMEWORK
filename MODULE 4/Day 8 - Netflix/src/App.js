import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
// import Reservations from "./components/Reservations"
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route path="./" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
