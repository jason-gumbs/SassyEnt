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
    FormControl,
    ControlLabel,
    HelpBlock,
    Button,
    Modal,
    Carousel
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
                <img src={services} style={{width: 1000, margin: "auto"}}/>


            </div>
        );
    }
}

export default Home;