import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ParticlesBg from "particles-bg";

// https://reactjsexample.com/react-particles-animation-background-component/

ReactDOM.render(
    <Router>
        <App />
        <ParticlesBg type="square" bg={true}/>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();