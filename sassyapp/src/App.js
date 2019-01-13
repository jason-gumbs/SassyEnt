import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Navbar,
  Grid,
  Row,
  Col
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Sassy the cosmetologist</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav
            bsStyle="tabs"
            onSelect={k => this.handleSelect(k)}
            className="nav"
            pullRight
          >
            <NavItem eventKey="1" href="/home">
              Home
            </NavItem>
            <NavDropdown eventKey="4" title="Services" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey="3">Product</NavItem>
            <NavItem eventKey="4">About</NavItem>
          </Nav>
        </Navbar>
        <Grid fluid style={{ hieght: "100%" }}>
          <Row>
            <Col />
            <Col style={{ margin: "auto" }}>
              <h1 className="cursive">Coming Soon</h1>
              <p>NEWS LETTER SIGN-UP AND PROMOTIONS</p>
            </Col>
            <Col />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
