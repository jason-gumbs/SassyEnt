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
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
  Modal,
  Container
} from "react-bootstrap";

class App extends Component {
  state = {
    name: "",
    email: "",
    value: "",
    show: true
  };
  getValidationState() {
    const length = this.state.name.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        <div className="navContainer">
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
            >
              <NavItem eventKey="1" href="/home" style={{ color: "black" }}>
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
        </div>

        <Grid fluid style={{ hieght: "100%" }}>
          <Row>
            <Col />
            <Col style={{ margin: "auto" }}>
              <h1 className="cursive">Coming Soon</h1>
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
                  <form>
                    <FormGroup
                      controlId="formBasicText"
                      validationState={this.getValidationState()}
                    >
                      <ControlLabel>Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="value"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                      />
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
