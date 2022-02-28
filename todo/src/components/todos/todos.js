import React, { Component, useEffect, useState } from 'react';
import './todos.scss'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import axios from 'axios';


class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "https://www.todoapi.ml/todos",
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
        if (!this.props.todoList) { 
            this.fetchAuthUser(this.state.url);            
        }
    }

    render() { 
        return ( 
            <div className="todos-comp">
                <div className="todos">
                    {
                        this.props.todoList ? this.props.todoList.map((el) => {
                        return (
                            <div className="todo">
                                <input type="checkbox" defaultChecked={el.completed} />
                                <p>{el.title}</p>
                            </div>
                        )})
                        :
                        (this.state.response ?
                            this.state.response.map((el) => {
                            return (
                                <div className="todo">
                                    <input type="checkbox" defaultChecked={el.completed} />
                                    <p>{el.title}</p>
                                </div>
                                )
                            })
                            :
                            <div style={{ "textAlign": "center", "marginTop": "10vh" }}>Please wait a moment...</div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Todos;