import React from "react";

//stateless functional components
const Navbar = ({ totalCounters }) => {
  console.log('Navbar-Rendered')
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
