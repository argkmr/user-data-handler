import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import prisonmike from "../images/prisonmike.png"

const UserDetails = (props) => {
    const loaction = useLocation();
    const userName = loaction.state.name;
    const userEmail = loaction.state.email;
    
    return (
        <div className="main"> 
            <div className="container">
            <div className="ui card centered">
                <div className="image">
                    <img src={prisonmike} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{userName}</div>
                    <div className="discription">{userEmail}</div>
                </div>
            </div>
            <div className="ui card centered">
                    <Link to="/"><button className="ui button blue" style={{width:"100%"}}>Back</button></Link>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;