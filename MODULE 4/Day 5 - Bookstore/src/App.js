import React from "react";
import NavBar from "./Components/NavBar";
// import MyJumbotron from "./Components/MyJumbotron";
// import BookList from "./Components/BookList"
import Register from "./Components/Register"
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <NavBar title="Wise Up" />
      {/* <MyJumbotron title="Welcome" /> */}
      {/* <SingleBook /> */}
      {/* <BookList /> */}
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router >
  );
}

export default App;
