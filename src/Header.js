import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <nav
            class="navbar navbar-light"
            style={{ backgroundcolor: "#e3f2fd" }}
          >
            <a class="navbar-brand" href="/">
              Tasty tv
            </a>
            <Link to="/">
              <button type="button" class="btn btn-primary">
                Home
              </button>
            </Link>
            <div className="nav-links">
              <Link to="/favourite">
                <button type="button" class="btn btn-primary">
                  Favourite list
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
