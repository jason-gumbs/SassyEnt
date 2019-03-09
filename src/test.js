import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Nav,
  NavItem,
  NavDropdown,
  Navbar,
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
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
      <Container>
        // <Navbar>
        //   <Navbar.Header>
        //     <Navbar.Brand>
        //       <a href="#home">Sassy the cosmetologist</a>
        //     </Navbar.Brand>
        //   </Navbar.Header>
        //   <Nav
        //     bsStyle="tabs"
        //     onSelect={k => this.handleSelect(k)}
        //     className="nav"
        //     pullRight
        //   >
        //   <Nav.Item>
        //     <Nav.Link eventKey="1" href="#/home">
        //       NavLink 1 content
        //     </Nav.Link>
        //   </Nav.Item>
        //   <Nav.Item>
        //     <Nav.Link eventKey="2" title="Item">
        //       NavLink 2 content
        //     </Nav.Link>
        //   </Nav.Item>
        //   <Nav.Item>
        //     <Nav.Link eventKey="3" disabled>
        //       NavLink 3 content
        //     </Nav.Link>
        //   </Nav.Item>
        //   <NavDropdown title="Dropdown" id="nav-dropdown">
        //     <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        //     <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        //     <NavDropdown.Item eventKey="4.3">
        //       Something else here
        //     </NavDropdown.Item>
        //     <NavDropdown.Divider />
        //     <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        //   </NavDropdown>
        //   </Nav>
        // </Navbar>

        // <Row>
        //   <Col />
        //   <Col style={{ margin: "auto" }}>
        //     <h1 className="cursive">Coming Soon</h1>
            // <Modal
            //   size="lg"
            //   aria-labelledby="contained-modal-title-vcenter"
            //   show={this.state.show}
            //   onHide={this.handleClose}
            // >
            //   <Modal.Header closeButton>
            //     <Modal.Title>NEWS LETTER SIGN-UP AND PROMOTIONS</Modal.Title>
            //   </Modal.Header>
            //   <Modal.Body>
            //     <Form>
            //       <Form.Group
            //         controlId="FormBasicText"
            //         validationState={this.getValidationState()}
            //       >
            //         <Form.Label>Name</Form.Label>
            //         <Form.Control
            //           type="text"
            //           name="value"
            //           value={this.state.value}
            //           placeholder="Enter text"
            //           onChange={this.handleChange}
            //         />
            //         <Form.Label>Email</Form.Label>
            //         <Form.Control
            //           type="text"
            //           name="email"
            //           value={this.state.email}
            //           placeholder="Enter text"
            //           onChange={this.handleChange}
            //         />
            //       </Form.Group>
            //     </Form>
            //   </Modal.Body>
            //   <Modal.Footer>
            //     <Button variant="primary" onClick={this.handleClose}>
            //       Submit
            //     </Button>
            //   </Modal.Footer>
            // </Modal>
        //   </Col>
        //   <Col />
        // </Row>
      </Container>
    );
  }
}

export default App;
