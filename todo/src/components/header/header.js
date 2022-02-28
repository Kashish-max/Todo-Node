import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './header.scss'

function Header() {
    return ( 
        <div className="header-comp">
            <NavLink to='/' className="comp left" exact activeClassName="active">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ "fill": "#f4adc8" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fff"><path d="M83.3125,10.75c-10.38495,0.01185 -18.80065,8.42755 -18.8125,18.8125v24.1875c0.00889,7.41764 6.01986,13.42861 13.4375,13.4375h16.125c7.41764,-0.00889 13.42861,-6.01986 13.4375,-13.4375v-24.1875c-0.01185,-10.38495 -8.42755,-18.80065 -18.8125,-18.8125zM38.96875,43c-5.19493,0 -9.40625,4.21132 -9.40625,9.40625v11.08594c0.00296,3.5239 2.85891,6.37985 6.38281,6.38281h8.73438c3.5239,-0.00296 6.37985,-2.85891 6.38281,-6.38281v-11.08594c0,-5.19493 -4.21132,-9.40625 -9.40625,-9.40625zM130.34375,43c-5.19493,0 -9.40625,4.21132 -9.40625,9.40625v11.08594c0.00296,3.5239 2.85891,6.37985 6.38281,6.38281h8.73438c3.5239,-0.00296 6.37985,-2.85891 6.38281,-6.38281v-11.08594c0,-5.19493 -4.21132,-9.40625 -9.40625,-9.40625zM131.6875,77.9375c-5.51018,0.00439 -10.9096,1.54786 -15.5896,4.45642c14.02303,7.06447 25.14777,18.79241 31.46265,33.16858h13.68945v-8.0625c0.01143,-7.84396 -3.09951,-15.36995 -8.64603,-20.91647c-5.54652,-5.54652 -13.07251,-8.65746 -20.91647,-8.64603zM39.02124,77.95849c-15.81918,0.67643 -28.29029,13.70788 -28.27124,29.54151v8.0625h13.68945c6.31583,-14.37554 17.4403,-26.1032 31.46265,-33.16858c-5.05158,-3.14544 -10.93555,-4.69144 -16.88086,-4.43543zM83.34924,80.68799c-23.53446,1.01139 -44.44612,15.31691 -53.91797,36.88489c0.07394,0.21879 0.11808,0.44655 0.13123,0.67712c-0.00908,0.94617 -0.52099,1.81601 -1.34375,2.28332c-2.66576,6.99517 -4.03191,14.41828 -4.03125,21.90418v18.8125h123.625v-18.8125c0.00066,-7.4859 -1.36549,-14.90901 -4.03125,-21.90418c-0.82276,-0.46732 -1.33467,-1.33716 -1.34375,-2.28332c0.01484,-0.23082 0.06074,-0.45858 0.13647,-0.67712c-10.24638,-23.33169 -33.76579,-37.97946 -59.22473,-36.88489z"></path></g></g></svg>
                <p>Users</p>
            </NavLink>
            <NavLink to='/todos' className="comp right" exact activeClassName="active">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ "fill": "#aae5ff" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fff"><path d="M45.0425,16.4475l-17.845,22.6825l-6.5575,-5.805l-9.1375,10.32l12.04,10.75l5.4825,4.8375l4.515,-5.805l22.36,-28.595zM65.36,30.96v13.76h92.88v-13.76zM45.0425,64.6075l-17.845,22.6825l-6.5575,-5.805l-9.1375,10.32l12.04,10.75l5.4825,4.8375l4.515,-5.805l22.36,-28.595zM65.36,79.12v13.76h92.88v-13.76zM45.0425,112.7675l-17.845,22.6825l-6.5575,-5.805l-9.1375,10.32l12.04,10.75l5.4825,4.8375l4.515,-5.805l22.36,-28.595zM65.36,127.28v13.76h92.88v-13.76z"></path></g></g></svg>
                <p>Todos</p>
            </NavLink>
        </div>
    );
}

export default Header;