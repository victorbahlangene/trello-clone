import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <ul>
            <li>Theme</li>
            <a
              href="https://victorbahlangene.github.io/portfolio/#/"
              target="blank"
            >
              <li>Porfolio</li>
            </a>

            <Link to="/">
              <li>
                <i className="fa fa-paragraph fa-lg" />
              </li>
            </Link>

            <Link to="/">
              <li>Help</li>
            </Link>

            {/* for now go to the tasks window */}
            <Link to="/tasks">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
