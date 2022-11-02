import React from "react";

function Header() {
  return (
    <header className="appHeader">
      <nav>
        <h1 className="fadeIn">Events CA</h1>
        <ul className="menuList">
          <li className="navLinks">
            <a href="https://www.ticketmaster.ca/" target="_blank">
              Go to Ticketmaster.com
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
