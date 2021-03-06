import React, { PureComponent } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import fireinit from "../../config/firebase";
import "./signup.css";
import { Link } from "react-router-dom";

export default class SignUp extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSignUp = event => {
        event.preventDefault();
        this.setState({ errorMessage: "" });

        fireinit
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                this.setState({ errorMessage: error.message });
            });
    };

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    {errorMessage && <div>{errorMessage}</div>}
                    <FormGroup className="label-write" controlId="email" bsSize="large">
                        <ControlLabel>Zarejestruj się: </ControlLabel>


                        <FormControl
                            className="label-placeholder"
                            autoFocus
                            type="text"
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
                        onClick={this.handleSignUp}
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Zarejestruj się
                    </Button>
                    <Link to="/loginpage">
                        <Button block bsSize="large" type="submit" className="btn-log">
                            Mam już konto
                        </Button>
                    </Link>
                </form>
            </div>
        );
    }
}