import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    //const {id, gender, name, email, image, DOB, phone} = props.ContactProps;
    const userData = props.ContactProps;

    return (
        <>
            <div className="item" style={{ display: "flex", marginTop: "10px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img className="ui avatar image" src={userData.image} alt="user" style={{ marginRight: "5px" }} />
                    <div className="content">
                        <Link to={`/userDetails/${userData.id}`} state={userData}><div className="header" style={{ color: "white" }}>{userData.name}</div></Link>
                        <div style={{ color: "white" }}>{userData.email}</div>
                    </div>
                </div>

                <div style={{ marginLeft: "auto" }}><i className="trash alternate outline icon"
                    style={{ color: "red" }}
                    onClick={() => props.ClickHandler(userData.id)}></i></div>
            </div>
            <hr
                style={{
                    background: '#443355',
                    color: '#443355',
                    borderColor: '#443355',
                    height: '2px',
                }}
            />
        </>
    );
}

export default ContactCard;