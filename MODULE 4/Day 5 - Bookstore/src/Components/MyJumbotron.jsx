import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import './MyStyle.css';


const MyJumbotron = () => {
    return (
        <Jumbotron fluid text-center>
            <h1>Wise Up!</h1>
            <h5>We Lose Ourselves in Books, We Find Ourselves There, Too.<br></br>
                Enrich your life!</h5>
            <p><Button variant="danger">Get 20% Discount</Button></p>
        </Jumbotron>
    )
}

export default MyJumbotron;
