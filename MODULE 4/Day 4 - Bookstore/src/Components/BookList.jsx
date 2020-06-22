import React, { Component } from 'react'
import { Row, Col, Card, Container, Button, Badge, FormControl } from 'react-bootstrap'
import books from "../data/romance.json"
import './MyStyle.css';

let bookCategories = ["Fantasy", "Horror", "History", "Romance"]

class BookList extends Component {

    state = {
        // books: [],
        search: "",
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
                <Row class="search-bar mb-5">
                    <FormControl placeholder="Search your book..."
                        value={this.state.value}
                        onChange={(e) => this.setState({ search: e.currentTarget.value.toLowerCase() })}
                    />
                </Row>

                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 mb-4 text-center">

                    {books
                        .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
                        .slice(0, this.state.size).map((book) =>
                            <Col>
                                <Card style={{ width: "15 %" }, { padding: "5 + %" }}>
                                    <Card.Img src={book.img} style={{ padding: "0.65rem" }} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Badge className="badge-class" variant="danger mb-2">{book.category}</Badge>
                                        <Button variant="dark">Order now for {book.price} £ </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
                <Row>
                </Row>
                <Button onClick={this.increase}>Add 8 more books</Button>
            </Container >
        )
    }
}

export default BookList


