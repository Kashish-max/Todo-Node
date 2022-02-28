import React, { Component } from 'react';
import './home.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Users from '../users/users';
import User from '../user/user';
import Todos from '../todos/todos';

function Home() {
    return ( 
        <Router>
            <div className="home-page">
                <div className="_app">
                    <div className="float">
                        <Header />
                        <Switch>
                            <Route exact path={["/", "/users"]} component={Users} />
                            <Route  path="/users/" component={User}/>
                            <Route exact path="/todos" component={Todos}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Home;