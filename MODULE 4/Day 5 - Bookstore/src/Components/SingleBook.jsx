import React, { Component } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap'

class SingleBook extends Component {
    render() {
        return (
            <Row className="col-md-3 ">
                <Col>
                    <Card style={{ width: "15 %" }, { padding: "5 + %" }}>
                        <Card.Img src={this.props.item.img} style={{ padding: "0.65rem" }} />
                        <Card.Body>
                            <Card.Title>{this.props.item.title}</Card.Title>
                            <Badge className="badge-class" variant="danger mb-2">{this.props.item.category}</Badge>
                            <Button variant="dark">Order now for {this.props.item.price} £ </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}
export default SingleBook;