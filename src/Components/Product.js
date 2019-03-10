import React, {Component} from "react";
import {Prompt} from "react-router-dom"
import '../App.css';
import Header from "./Header"
import girl1 from "../Assets/girl1.JPG"
import girl2 from "../Assets/girl2.JPG"
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


class Product extends Component {
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
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={girl2}/>
                                <Card.Body>
                                <Card.Title>avy Blue</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={girl2}/>
                            <Card.Body>
                                <Card.Title>avy Blue</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col sm>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={girl1}/>
                        <Card.Body>
                            <Card.Title>Wavy Blue</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>


    </div>
    )
        ;
    }
}

export default Product;