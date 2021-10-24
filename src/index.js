import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/registeer';
import Login from './components/login';
import Logout from './components/logout';

const routing = (
    <Router>
        <React.StrictMode>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
            <Footer />
        </React.StrictMode>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));