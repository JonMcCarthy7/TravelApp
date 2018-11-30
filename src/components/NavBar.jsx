import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ auth, profile }) => {
  // const links = auth.uid ? (
  //   <SignedInLinks profile={profile} />
  // ) : (
  //     <SignedOutLinks />
  //   );
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          CoolAppName
        </Link>
        <ul className="right hide-on-med-and-down avatar">
          <li className="">
            <a> Profile </a>
          </li>
          <li>
            <a> Log Out </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default connect(null)(Navbar);
