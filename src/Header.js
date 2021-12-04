import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <img
            style={{
              marginRight: "40rem",
              width: "1200px",
              height: "400px",
            }}
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/BEST-SPACE-MOVIES.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5"
            alt="new"
          />
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
