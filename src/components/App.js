import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import UserDetails from './UserDetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (

    <div className="ui container">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList  ContactProps={contacts} GetContactId={removeContactHandler}/>} />
          <Route path="/add" element={<AddContact ContactHandler={addContactHandler}/>} />
          <Route path="/userDetails/:id" element={<UserDetails />}/>
        </Routes>
      </Router>

      {/* <Header />
      <AddContact ContactHandler={addContactHandler} />
      <ContactList ContactProps={contacts} GetContactId={removeContactHandler} /> */}

    </div>
  );
}

export default App;



