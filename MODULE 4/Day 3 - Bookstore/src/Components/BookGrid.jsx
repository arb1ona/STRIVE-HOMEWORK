import React, { Component } from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'

class BookList extends Component {

    state = {
        books: []
    }



    render() {
        return (
            <Container>
                {/* <Row>
                    <h1>{this.props.text}</h1>
                </Row> */}
                <Row className="justify-content-center mt-3 row row-cols-1 row-cols-md-4">
                    {this.state.books.map(book =>
                        <Col>
                            <Card style={{ width: "20 %" }, { padding: "5 + %" }}>
                                <Card.Img src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.category}</Card.Text>
                                    <Button variant="succes">Order now for {book.price} £ </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
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


