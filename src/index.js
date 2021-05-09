import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import Jokes from './pages/Jokes';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" render={() => <Header Component={App} />}/>
            <Route path="/jokes" render={() => <Header Component={Jokes} />}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

