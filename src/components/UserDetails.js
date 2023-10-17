import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const UserDetails = (props) => {
    const loaction = useLocation();
    const userName = loaction.state.name;
    const userEmail = loaction.state.email;
    const userImg = loaction.state.image;
    const userAge = loaction.state.age;
    const userPhone = loaction.state.phone;
    const userGender = loaction.state.location;
    
    return (
        
        <div className="main" style={{marginTop:"8%"}}> 
            <div className="container">
            <div className="ui card centered">
                <div className="image">
                    <img src={userImg} alt="user" />
                </div>
                <div className="content">
                    <div className="header"><strong>{userName}</strong></div>
                    <div className="discription">{userGender}</div>
                    <div className="discription">{userEmail}</div>
                    <div className="discription">Phone: {userPhone}</div>
                    <div className="discription">Age: {userAge}</div>
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