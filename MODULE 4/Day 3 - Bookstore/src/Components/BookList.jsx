import React, { Component } from 'react'
import { Row, Col, Card, Container, Button, Badge } from 'react-bootstrap'
import books from "../data/romance.json"


let bookCategories = ["fantasy", "horror", "history", "romance"]

class BookList extends Component {

    state = {
        size: 8,
    }
    increase = () => {
        this.setState({
            size: this.state.size + 8
        })
    };

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-3 row row-cols-1 row-cols-md-4">
                    {books.slice(0, this.state.size).map((book) =>
                        <Col>
                            <Card style={{ width: "20 %" }, { padding: "5 + %" }}>
                                <Card.Img src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Badge variant="danger mb-2">{book.category}</Badge>
                                    <Button variant="dark">Order now for {book.price} £ </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
                <Button onClick={this.increase}>Add 8 more books</Button>
            </Container >
        )
    }
    componentDidMount = async () => {
        const resp = await fetch("http://striveschool.herokuapp.com/books?offset=0&limit=50")
        if (resp.ok) {
            const books = await resp.json()

            this.setState({
                books: books
            })
        }
    }
}

export default BookList


