import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
};

export default class Register extends React.Component {
    state = initialState;

    // handleChange = event => {
    //     const isCheckbox = event.target.type === "checkbox";
    //     this.setState({
    //         [event.target.name]: isCheckbox
    //             ? event.target.checked
    //             : event.target.value
    //     });
    // };

    // validate = () => {
    //     let nameError = "";
    //     let emailError = "";
    //     // let passwordError = "";

    //     if (!this.state.name) {
    //         nameError = "name cannot be blank";
    //     }

    //     if (!this.state.email.includes("@")) {
    //         emailError = "invalid email";
    //     }

    //     if (emailError || nameError) {
    //         this.setState({ emailError, nameError });
    //         return false;
    //     }

    //     return true;
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if (isValid) {
    //         console.log(this.state);
    //         // clear form
    //         this.setState(initialState);
    //     }
    // };

    render() {
        return (

            <Form>
                <Form.Row className="form-inputs">
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

                <Form.Row >
                    <Button variant="primary" type="submit" class="btn">
                        Submit
                    </Button>
                </Form.Row>

                {/* 
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nameError}
                        </div>
                    </div>
                    <div>
                        <input
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                        </div>
                    </div>
                    <button type="submit">submit</button>
                </form> */}
            </Form >
        );
    }
}
