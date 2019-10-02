import React from "react";

export default function MainMenu(props) {
  const menuClass = `menu-primary${props.open ? " open" : " closed"}`;

  return (
    <div className={menuClass}>
      <button className="menu-primary-btn white" onClick={props.handleMainMenu}>
        Close Main Menu
      </button>
    </div>
  );
}
