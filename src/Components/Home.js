import React, {Component} from "react";
import {Prompt} from "react-router-dom"
import '../App.css';
import Header from "./Header"

import girl1 from "../Assets/girl1.JPG"
import girl2 from "../Assets/girl2.JPG"
import logo from "../Assets/Logo.png"
import place from "../Assets/800x400.png"
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
    Form,
    FormGroup,
    FormControl,

    HelpBlock,
    Button,
    Modal,
    Carousel,
    Container
} from "react-bootstrap";


class Home extends Component {
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
                <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={girl2}

                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={girl1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={girl1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="boxes">
                </div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>NEWS LETTER SIGN-UP AND PROMOTIONS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="value"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                </Container>
            </div>
        );
    }
}

export default Home;