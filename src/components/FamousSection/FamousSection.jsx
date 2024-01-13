import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    // to access the database file of famous people 
    // use a get route be able to render the list of people in to our site
    // we will recieve a response from the server with the data from the database
    // we will then take that data and put into an Array

    // we need a way to send a message from the client (computer) to the
    // server (which is a different computer). So, this means that we need to send
    // data from our client over physical wires that connect two computers that 
    // can be any distance from each other in the entire world. This is why
    // we must use URL (universal resource locators)
    // someone made a tool that will translate all of our JS code and data
    // into some other format. This way it can be sent and received by all of the
    // computers that are in between our client and our server. 
axios.get('/api/people')
    .then((result) => { 
      console.log(result.data)
      setPeopleArray(result.data);
    })
    .catch((error) => {
      console.log('this sucks you are wrong', error)
    });
       
    
}
  
   

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

  useEffect(() => {
    fetchPeople()
  }, []);


    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {/* TODO: Render the list of famous people */}
          {famousPeopleArray.map( 
            (famousperson)=>{
              return(
                // console.log(famousperson.name)
                <li>{famousperson.name}, {famousperson.role}</li>
              )
            }
          )}




        </ul>
      </section>
    );
}

export default FamousSection;
