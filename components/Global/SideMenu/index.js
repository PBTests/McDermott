import React from "react";
import Link from "next/link";

export default function SideMenu(props) {
  const menuClass = `side-menu${props.expanded ? " expanded" : ""}`;
  //<img src="/static/images/star.svg" width="30" height="30" />
  return (
    <div className={menuClass}>
      <ul>
        <li>
          <Link href="/star">
            <a>
              <i className="icon-1"></i>
              <span>Item One</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/clock">
            <a>
              <i className="icon-2"></i>
              <span>Item Two</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/grid">
            <a>
              <i className="icon-3"></i>
              <span>Item Three</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>
              <i className="icon-4"></i>
              <span>Item Four</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
