import React from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard"




const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.GetContactId(id)
    };
    // const ContactProps = [{
    //     id : "1",
    //     name : "Anurag Kumar",
    //     email : "argkmr2001@gmail.com",
    // }]
    const RenderContactList = props.ContactProps.map((ContactInfo) => {
        return (
            <ContactCard ContactProps={ContactInfo} ClickHandler={deleteContactHandler}></ContactCard>
        );
    });

    return (
        <div className = "main">
            <h2>Contact List</h2>
            <Link to="/add"><button className="ui button blue">Go to Add Contacts</button></Link>
            <div className="ui celled list">{RenderContactList}</div>
        </div>
    );
}

export default ContactList;
