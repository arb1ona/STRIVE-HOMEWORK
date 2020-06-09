import React from "react";
import NavBar from "./Components/NavBar";
import MyJumbotron from "./Components/MyJumbotron";
import BookList from "./Components/BookList"
import Footer from "./Components/Footer";
import SingleBook from "./Components/SingleBook";




function App() {
  return (
    <div className="App">
      <NavBar title="Wise Up" />
      <MyJumbotron title="Welcome" />
      {/* <SingleBook /> */}
      <BookList />

      <Footer />
    </div >
  );
}

export default App;
