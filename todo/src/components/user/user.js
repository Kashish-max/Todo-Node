import React, { Component, useEffect, useState } from 'react';
import './user.scss'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import axios from 'axios';

import Todos from '../todos/todos';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: `https://www.todoapi.ml${window.location.pathname}`,
            response :"",
        }
    }

    async fetchAuthUser(url) {
        const response = await axios.get(url);
        if (response) {
            this.setState({ response: response.data })
            console.log(this.state.response)
        }
    }

    componentDidMount() {
        this.fetchAuthUser(this.state.url);
        
    }

    render() { 
        return ( 
            <div className="user-comp">
                {this.state.response ?
                    <>    
                        <div className="user-header">
                            <span className="icon"></span>
                            <div className='detail'>
                                <h2>{this.state.response.name}</h2>
                                <p>Reach me at {this.state.response.email}</p>
                                <p>{this.state.response.address.city} {this.state.response.address.zipcode}</p>
                                <p>checkout {this.state.response.website}</p>
                            </div>
                        </div>
                        <Todos todoList={this.state.response.todos} />
                    </>
                    :
                    <div style={{"textAlign": "center", "marginTop": "10vh"}}>Please wait a moment...</div>
                }
            </div>
        );
    }
}

export default User;