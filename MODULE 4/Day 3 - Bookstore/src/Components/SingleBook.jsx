import React from "react";
import { Badge, Button, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleBook(props) {
    const { book } = props;

    return (
        <Card className="p-3">
            <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/book/${book.asin}`}
            >
                <Card.Img
                    style={{ width: "100%", objectFit: "cover" }}
                    variant="top"
                    src={book.img}
                />
            </Link>
            <Card.Body>
                <Badge pill variant="danger">
                    {book.category}
                </Badge>
                <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/book/${book.asin}`}
                >
                    <Card.Title>{book.title}</Card.Title>
                </Link>
                <Card.Text>
                    <div style={{ textDecoration: "line-through", color: "darkgrey" }}>
                        {(book.price * (1 + 0.5)).toFixed(2)}€
          </div>
                    <strong style={{ fontSize: "20pt" }}>{book.price}€</strong>
                </Card.Text>

                <Button size={"sm"} style={{ width: "100%" }} variant="dark">
                    Add to Cart
        </Button>
            </Card.Body>
        </Card>
    );
}

export default SingleBook;