import React, {Component} from "react";
import {Prompt} from "react-router-dom"
import '../App.css';
import Header from "./Header"

import logo from "../Assets/Logo.png"
import services from "../Assets/services.jpg"
import {
    Card,
    ListGroup
} from "react-bootstrap";


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

                <div class="container">
                    <h1 className="text-center border-bottom-1">About Me</h1>


                    {/*<Card style={{ width: '18rem' }}>*/}
                        {/*<ListGroup variant="flush">*/}
                            {/*<ListGroup.Item>Cras justo odio</ListGroup.Item>*/}
                            {/*<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
                            {/*<ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/}
                        {/*</ListGroup>*/}
                    {/*</Card>;*/}
                </div>


            </div>
        );
    }
}

export default About;