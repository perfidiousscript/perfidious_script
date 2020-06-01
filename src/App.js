import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bio from "./Components/Bio.js";
import Credits from "./Components/Credits.js";
import Contact from "./Components/Contact.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <h1 className="title">Samuel M. Moss</h1>
        <Router>
          <div className="linkBoxContainer">
            <span className="linkBox">
              <Link to="/bio">Bio</Link>
            </span>
            <span className="linkBox">
              <Link to="/credits">Credits</Link>
            </span>
            <span className="linkBox">
              <Link to="/contact">Contact</Link>
            </span>
          </div>
          <div className="centerBox">
            <Switch>
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/credits">
                <Credits />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
