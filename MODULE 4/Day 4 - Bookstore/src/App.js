import React from "react";
import NavBar from "./Components/NavBar";
import MyJumbotron from "./Components/MyJumbotron";
import Booklist from "./Components/BookList";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar title="Wise Up" />
      <MyJumbotron title="Welcome" />
      <Booklist />
      <Footer />
    </div >
  );
}

export default App;
