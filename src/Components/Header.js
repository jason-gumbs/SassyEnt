import React, {Component} from "react";
import {Prompt} from "react-router-dom"
import '../App.css';
import logo from "../Assets/Logo.png"
import place from "../Assets/800x400.png"
import {
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Navbar,
    Container,
    Button,
    Modal,
    Carousel
} from "react-bootstrap";


const Header = () => (
    <Container  fluid>
        <img src={logo} style={{height: 250, width: 350, margin: "auto"}}/>

        <Navbar >
            <Nav variant="pills"  className="justify-content-end" activeKey="/home">
            <Nav.Item>
                    <Nav.Link href="/home"> Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="/services">
                        Services
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" href="/product">
                        Product
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" href="about">
                        About us
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>


    </Container>
);

export default Header