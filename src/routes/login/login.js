import React, {PureComponent} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import firebase from "../../config/firebase";
import "./login.css";

export default class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
            })
            .then(u => {
                window.location = "/";
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            placeholder="Podaj adres email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Hasło</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Podaj hasło"
                        />
                    </FormGroup>
                    <Button
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Enjoy!
                    </Button>
                </form>
            </div>
        );
    }
}