import React from "react";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <div className="main-header">
        <button className="menu-primary-btn" onClick={props.handleMainMenu}>
          Open Main Menu
        </button>
        <h1 className="brand">Chameleon</h1>

        <div className="nav-right">
          <ul>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-header">
        <button className="menu-expand" onClick={props.handleSideMenu}>
          Sub Menu
        </button>
        <ul className="sub-menu">
          <li className="dropdown">
            <a href="#">File</a>
            <ul className="dropdown">
              <li>
                <a href="#">New Window</a>
              </li>
              <li>
                <a href="#">Open File</a>
              </li>
              <li>
                <a href="#">Close</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">View</a>
            <ul className="dropdown">
              <li>
                <a href="#">Grid view</a>
              </li>
              <li>
                <a href="#">Details view</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
