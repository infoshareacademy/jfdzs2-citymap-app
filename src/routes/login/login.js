import React, {PureComponent} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import fireinit from "../../config/firebase";
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
        fireinit
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
                    <FormGroup className="label-write" controlId="email" bsSize="large">
                        <ControlLabel>Email: </ControlLabel>
                        <FormControl
                            className="label-placeholder"
                            autoFocus
                            type="email"
                            placeholder="Podaj adres email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="label-write" controlId="password" bsSize="large">
                        <ControlLabel>Hasło: </ControlLabel>
                        <FormControl
                            className="label-placeholder"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Podaj hasło"
                        />
                    </FormGroup>
                    <Button
                        className="btn-log"
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