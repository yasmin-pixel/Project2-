import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="/">
              Tasty tv
            </a>
            <Link to="/">
              <button type="button" class="btn btn-secondary">
                Home
              </button>
            </Link>

            <div className="nav-links">
              <Link to="/favourite">
                <button type="button" class="btn btn-secondary">
                  Favourite
                </button>
              </Link>
            </div>
          </nav>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <Heading as="h2" size="3xl" isTruncated>
                (3xl) In love with React & Next
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
