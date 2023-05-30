import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Resume from '../components/resume';
import NavBar from '../components/nav';

function Header() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;