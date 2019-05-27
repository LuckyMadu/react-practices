import React from "react";

//stateless functional components
const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
