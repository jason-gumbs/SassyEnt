import React, {Component} from "react";
import {Prompt} from "react-router-dom"
import '../App.css';
import Header from "./Header"

import logo from "../Assets/Logo.png"
import services from "../Assets/services.jpg"

import {
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Navbar,
    Grid,
    Row,
    Col,
    Image,
    FormGroup,

    ControlLabel,
    HelpBlock,
    Button,
    Modal,
    Card,
    Carousel,
    Container
} from "react-bootstrap";
import girl1 from "../Assets/girl1.JPG";


class About extends Component {
    state = {
        name: "",
        email: "",
        value: "",
        show: false,
        isBlocking: false
    };


    getValidationState() {
        const length = this.state.name.length;
        if (length > 10) return "success";
        else if (length > 5) return "warning";
        else if (length > 0) return "error";
        return null;
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    handleClose = () => {
        this.setState({show: false});
    };

    render() {
        let {isBlocking} = this.state;
        return (
            <div className="App">
                <Header/>
                <br/>

                <Container>
                    <Row>
                        <Col><h1>About US</h1></Col>
                    </Row>
                    <Row>
                        <Col>  <img
                            className="d-block w-100"
                            src={logo}
                            alt="Third slide"
                        /></Col>
                        <Col><p>fsdfksdflksjdfisjdfsdibsidbcuisdbiuhsdifhskdfhkjsdhfisucnisudnciushduin</p></Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default About;