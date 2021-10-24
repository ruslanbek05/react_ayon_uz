import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Single from './components/single';

const routing = (
    <Router>
        <React.StrictMode>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route path="/post/:slug" component={Single} />
            </Switch>
            <Footer />
        </React.StrictMode>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));