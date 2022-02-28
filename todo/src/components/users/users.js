import React, { Component, useEffect, useState } from 'react';
import './users.scss'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import axios from 'axios';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost:3600/users",
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
            <div className="users-comp">
                <div className="users-header">
                    <div className="index">User Id</div>
                    <div className="name">Name</div>
                </div>
                <div className="users">
                    {this.state.response ? this.state.response.map((el) => {
                        return(
                            <NavLink to={`/users/${el.id}`} className="user">
                                <div className="index">{el.id}.</div>
                                <div className="name">{el.name}</div>
                                <div className="detail">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 172 172" style={{ "fill": "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#5eb1f6"><path d="M96.32,134.16c-0.52406,0 -1.04812,-0.12094 -1.51844,-0.36281c-1.1825,-0.57781 -1.92156,-1.76031 -1.92156,-3.07719v-27.52h-75.68c-1.89469,0 -3.44,-1.53187 -3.44,-3.44v-27.52c0,-1.89469 1.54531,-3.44 3.44,-3.44h75.68v-27.52c0,-1.30344 0.73906,-2.49937 1.92156,-3.07719c1.16906,-0.57781 2.56656,-0.44344 3.61469,0.34937l58.48,44.72c0.84656,0.645 1.34375,1.65281 1.34375,2.72781c0,1.075 -0.49719,2.08281 -1.35719,2.72781l-58.48,44.72c-0.60469,0.47031 -1.34375,0.71219 -2.08281,0.71219z"></path></g></g></svg>
                                    </span>
                                </div>
                            </NavLink>
                        )
                    })
                        :
                        <div style={{"textAlign": "center", "marginTop": "10vh"}}>Please wait a moment...</div>
                    }
                </div>
            </div>
        );
    }
}

export default Users;