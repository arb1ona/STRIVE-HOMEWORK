import React, { Component } from 'react'
import MyJumbotron from "./MyJumbotron";
import Booklist from "./BookList";

class Home extends Component {
    render() {
        return (
            <>
                <MyJumbotron />
                <Booklist />

            </>
        )
    }
}

export default Home;