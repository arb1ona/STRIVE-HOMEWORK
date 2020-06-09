import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class BookListItem extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 mb-4 text-center" >
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
                    </Row>
                </Container>
            </div>
        )
    }
}
export default BookListItem