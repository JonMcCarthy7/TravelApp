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
        <ul className="right hide-on-med-and-down">
          <li>
            <a> Profile </a>
          </li>
          <li>
            <a> Log Out </a>
          </li>
        </ul>
        {/* {links} */}
      </div>
    </nav>
  );
};

// const mapStateToProps = state => {
//   console.log(state);

//   return {
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
//   };
// };

export default connect(null)(Navbar);
