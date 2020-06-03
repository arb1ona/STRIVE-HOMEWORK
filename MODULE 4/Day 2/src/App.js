import React from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Book from "./components/Book";

// const onSubmit = e => {
//   e.preventDefault();
//   getData();
// };

function App() {
  return (
    <div className="App">


      <NavBar title="Wise Up" />
      <Home />
    </div >
  );
}

export default App;
