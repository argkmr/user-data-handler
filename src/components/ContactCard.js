import React from "react";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    //const {id, gender, name, email, image, DOB, phone} = props.ContactProps;
    const userData = props.ContactProps;
    
    return (
        <div className="item" style={{ display: "flex" }}>
            <img className="ui avatar image" src={userData.image} alt="user" style={{marginRight:"5px"}}/>
            <div className="content">
                <Link to={`/userDetails/${userData.id}`} state={userData}><div className="header">{userData.name}</div></Link>
                <div>{userData.email}</div>
            </div>
            <i className="trash alternate outline icon" 
            style={{ marginLeft: "auto", marginTop: "8px", color:"red" }}
            onClick={()=> props.ClickHandler(userData.id)}></i>
        </div>
    );
}

export default ContactCard;