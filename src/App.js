import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homes from "../src/Components/Home";
import Services from "../src/Components/Services";
import About from "../src/Components/About";
import Product from "../src/Components/Product";




const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homes} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/about" component={About} />
            <Route component={Homes} />
        </Switch>
      </div>
    </Router>
);

export default App;