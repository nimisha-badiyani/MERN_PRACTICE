import React,{ useContext }from "react";
import "bootstrap/dist/css/bootstrap.css";

import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/posts">
              Posts
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/logout">
              Logout
            </a>
          </li>
        </>
      );
    }
    else {
      return (
        <>
          <li className="nav-item active">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/posts">
              Posts
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/login">
              Login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/signup">
              Registration
            </a>
          </li>

        </>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              
            <RenderMenu />
              
              

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
