import React from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap'

class Register extends React.Component {

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="text" required pattern="[A-Za-z]{2, }" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" required pattern="[A-Za-z]{3, }" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="email" required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="password" required pattern="[A-Za-z!]{8, }" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control required placeholder="Year of birth" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control required placeholder="Street Adress" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control as="select" defaultValue="Choose City" >
                            <option>Choose City</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control required placeholder="Postal Code" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control required placeholder="City" />
                    </Form.Group>
                </Form.Row>

                <Form.Row >
                    <Button variant="primary" type="submit" class="btn">
                        Submit
                    </Button>
                </Form.Row>
            </Form>
        )
    }

}

export default Register;
