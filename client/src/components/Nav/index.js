import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-info">
      <a className="navbar-brand" href="/">
        <h5 className="text-white">home</h5>
      </a>
      <div id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item" id="home">
            <a className="nav-link" href="/">
              <button type="button" className="btn btn-primary text-white">
                search books
              </button>
            </a>
          </li>
          <li className="nav-item" id="report">
            <a className="nav-link" href="/saved">
              <button type="button" className="btn btn-warning text-white">
                saved books
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
