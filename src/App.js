import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homes from "../src/Components/Home";


const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homes} />
          <Route component={Homes} />
        </Switch>
      </div>
    </Router>
);

export default App;