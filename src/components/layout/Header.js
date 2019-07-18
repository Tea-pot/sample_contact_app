import React from "react";
import PropTypes from "prop-types"; // impt TAB
import { Link } from "react-router-dom";
// you can create CSS and bring it here, it would affect only this component
// import './nameOfCss.css';
// if there is no state we can use function component rfc TAB

const Header = props => {
  // to access props put them inside function parameter
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="nav-bar nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-xs fa-home"> Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-xs fa-plus"> Add</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <i className="fas fa-xs fa-question"> About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// to indicate default prop, to display always some kind of Header ex
Header.defaultProps = {
  branding: "My App" // this case, Contact manager overwriting that
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
/* 
const headingStyle = {
  // we can keep style in TAG or set it to variable
  //<h1 style={{ color: "#bada55", sontSize: "2rem" }}>{branding}</h1>
  color: "#bada55",
  sontSize: "2rem"
};
*/

export default Header;
