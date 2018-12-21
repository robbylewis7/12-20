import React from 'react';
import Pulse from './pulse.png'
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        // this.handleClick = () => {
        //     localStorage.clear();
        // };


        return (

            <div id = "header">
                <div id = "logoHeader">
                    <img src={Pulse} id="logo"></img>
                    <div id = "mainLogoName">Pulse</div>
                </div>

                <Link to={'/main'}>
                    <button id = "logoutButton">Logout</button>
                </Link>
            </div>


        );
    }
}

