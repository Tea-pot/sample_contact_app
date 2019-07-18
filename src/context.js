import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        //payload is a data you want to send  with your action
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        //payload is a data you want to send  with your action
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  // pull out the state from contacts
  state = {
    contacts: [],
    /* 
      pulled out from contacts Array
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
      */
    //provider for fetched data is ComponentDidMount

    dispatch: action => this.setState(state => reducer(state, action))
  };

  /* async version not commented
    componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contacts: res.data }));
  }

  
  */

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      // now you need to decide what you would like to pass, in this case entire state
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; // to skip sytax Context.Consumer
