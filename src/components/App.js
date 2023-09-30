import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import UserDetails from './UserDetails';

function App() {
  
  return (

    <div className="ui container">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList/>} />
          {/* <Route path="/add" element={<AddContact ContactHandler={addContactHandler}/>} /> */}
          <Route path="/userDetails/:id" element={<UserDetails />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;



