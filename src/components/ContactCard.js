import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png"

const ContactCard = (props) => {
    const {id, name, email} = props.ContactProps;
    const userData = props.ContactProps;
    console.log(userData)
    
    return (
        <div className="item" style={{ display: "flex" }}>
            <img className="ui avatar image" src={user} alt="user" style={{marginRight:"5px"}}/>
            <div className="content">
                <Link to={`/userDetails/${id}`} state={userData}><div className="header">{name}</div></Link>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" 
            style={{ marginLeft: "auto", marginTop: "8px", color:"red" }}
            onClick={()=> props.ClickHandler(id)}></i>
        </div>
    );
}

export default ContactCard;