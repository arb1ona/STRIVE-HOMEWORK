import { Container } from "react-bootstrap"


render() {
    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={6}>
                    <h1>{this.state.title}</h1>
                    <p className="lead">Enrich your life!</p>
                    <hr className="mt-2"></hr>
                </Col>
                <Card>
                    {items.map((item) => {
                        return (
                            <Card.Item key={item.id}>
                                <img className="d-block w-80"
                                    src={item.img}
                                    alt={item.title} />
                                <Card.Caption>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                </Card.Caption>
                            </Card.Item>
                        )
                    }
                    )}
                </Card>
            </Row>
        </Container>
    )
}
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>