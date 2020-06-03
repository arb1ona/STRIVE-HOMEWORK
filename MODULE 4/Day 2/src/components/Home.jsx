import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../data/fantasy.json";

class Home extends Component {
  state = {
    size: 10,
  }
  increase = () => {
    this.setState({
      size: this.state.size + 10
    })
  };


  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 row-cols-3 ">
          {books.slice(0, this.state.size).map((book) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
          )}
        </Row>
        <Button onClick={this.increase}>Add 10 more books
        </Button>
      </Container>
    );
  }
}

export default Home;
