import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  /* 
  if there is aneed for initialisation of sth use constructor, otherwise
  constructor() {
    super();
    this.state = {}
  
    contacts has bee pulled out to  context component and state has gone
    Context exported Provider to App.js we need to import context to module from which we had pueeld state out
  state = {
    contacts: [
      {
        id: "1",
        name: "John Doe",
        email: "jdoe@test.com",
        phone: "555 555 555"
      },
      {
        id: "2",
        name: "Karen Kampbell",
        email: "kkampbel@test.com",
        phone: "666 555 555"
      },
      {
        id: "3",
        name: "Max Rabbe",
        email: "maxr@test.com",
        phone: "777 555 777"
      }
    ]
  };
  */
  /*would be handled by context
  
  
  deleteContaact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  */
  // we need to add state = { contacts: []} otherwise app does not know loop through?
  state = {
    contacts: []
  };

  render() {
    // now we are not returning it from here

    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-info">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  /*
                  deleteClickHandler={this.deleteContaact.bind(
                    this,
                    contact.id
                  )}
                  */
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    /* 
    we are pulling contacts from state, looping through using map() and outputing name in h1
    */
    /*
    const { contacts } = this.state;
    return (
       ...................................
      we can simpy pass entire contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            ............................
      
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContaact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
    */
  }
}
