import React from "react";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
// import MyJumbotron from "./Components/MyJumbotron";
// import Booklist from "./Components/BookList";
import Footer from "./Components/Footer";
import Home from "./Components/Home"
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <NavBar title="Wise Up" />
      {/* <MyJumbotron title="Welcome" /> */}
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Home} />
      {/* <Booklist /> */}
      <Footer />
    </Router >
  );
}
export default App;
