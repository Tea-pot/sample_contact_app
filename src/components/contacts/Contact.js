import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

export default class Contact extends Component {
  // or we can have it inside the class
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };
  /* 
    constructor() {
    super();
    this.state = {};

    this.clickedShow = this.clickedShow.bind(this);
  }
  */

  state = {
    showContactInfo: false
  };
  /* 
    onDeleteClick = (id, dispatch) => {
    //this.props.deleteClickHandler();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };
  */
  onDeleteClick = async (id, dispatch) => {
    //this.props.deleteClickHandler();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  // we can bind onClick with this. to show state-> state = {};
  //  onClick={this.clickedShow.bind(this)}
  // by constructor, or the best way is to use arrow =>
  //With arrow functions the this keyword always represents the object that defined the arrow function.
  clickedShow = e => {
    // if we pass e event object we canacces different things too
    //console.log(this.state);
    //State is immutabe, you can not directly manipulate it
    //what we going to achieve is toggling the state that is wny ->
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  //access props in class component-> this.props
  render() {
    const { id, name, email, phone } = this.props.contact;
    // not to write this.props.xxxx constantly
    const { showContactInfo } = this.state;
    /* 
    we could have it also like that: 
    const { contact } = this.props;

          <h4 className="card-title">{contact.name}</h4>
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone: {contact.phone}</li>
    */

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className=" card border-info mb-3">
              <div className="card-body">
                <h4 className="card-title">
                  {name}{" "}
                  <i
                    onClick={this.clickedShow}
                    style={{ cursor: "pointer" }}
                    className="fas fa-sort-down"
                  />{" "}
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "#d5391a"
                    }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "#36e39f",
                        marginRight: "1rem"
                      }}
                    />
                  </Link>
                </h4>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  //deleteClickHandler: PropTypes.func.isRequired
};
/*
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
 */
