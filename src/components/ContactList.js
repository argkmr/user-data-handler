import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const LOCAL_STORAGE_KEY = "userInfo";
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
    const [searchTerm, setSearchTerm] = useState("");
    const inputEl = useRef("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchData = () => {
        axios.get("https://randomuser.me/api").then((response) => {
            const userData = response.data.results[0];
            const userObj = {
                id: uuidv4(),
                gender: userData.gender,
                name: userData.name.first + " " + userData.name.last,
                email: userData.email,
                image: userData.picture.large,
                age: userData.dob.age,
                phone: userData.phone
            }
            // Use setUserInfo to update the state
            setUserInfo((prevUserInfo) => [...prevUserInfo, userObj]);
        })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    };

    useEffect(() => {
        // Save userInfo to local storage whenever it changes
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
    }, [userInfo]);

    const deleteContactWithID = (id) => {
        // Use setUserInfo to update the state with the new filtered array
        setUserInfo((prevUserInfo) => prevUserInfo.filter((contact) => contact.id !== id));
    };

    const searchHandler = () => {
        //console.log(searchTerm)
        const searchTxt = inputEl.current.value;
        setSearchTerm(searchTxt);
        if (searchTerm !== "") {
            const newContactList = userInfo.filter((usrInf) => {
                return Object.values(usrInf)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResults(newContactList);
        } else {
            setSearchResults(userInfo);
        }
    }

    const renderContactList = () => {
        if (searchTerm.length < 1) {
            return userInfo.map((contactInfo) => (
                <ContactCard key={contactInfo.id} ContactProps={contactInfo} ClickHandler={deleteContactWithID} />
            ));
        }
        else {
            return searchResults.map((contactInfo) => (
                <ContactCard key={contactInfo.id} ContactProps={contactInfo} ClickHandler={deleteContactWithID} />
            ));
        }
    };

    return (
        <div className="main">
            <div style={{ display: "flex" }}>
                <h2 style={{ marginRight: "auto" }}>Contact List</h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input
                            ref={inputEl}
                            type="text"
                            placeholder="Search"
                            className="prompt"
                            value={searchTerm}
                            onChange={searchHandler}
                        />
                        <i className="search icon"></i>
                    </div>
                </div>
            </div>

            <button className="ui button blue" onClick={fetchData}>Click to Add Contact</button>
            <div className="ui celled list">{renderContactList()}</div>
        </div>
    );
}

export default ContactList;
