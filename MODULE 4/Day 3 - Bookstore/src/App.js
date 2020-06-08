import React from "react";
import NavBar from "./Components/NavBar";
import MyJumbotron from "./Components/MyJumbotron";
import Booklist from "./Components/BookList";
import MyBadge from "./Components/MyBadge";


function App() {
  return (
    <div className="App">
      <NavBar title="Wise Up" />
      <MyJumbotron title="Welcome" />
      <Booklist />
      <MyBadge color="warning" />
    </div >
  );
}

export default App;
