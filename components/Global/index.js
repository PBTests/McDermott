import React from "react";

import Header from "./Header";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

import styles from "../../sass/global.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenuOpen: false,
      sideMenuExpanded: false
    };

    this.handleMainMenu = this.handleMainMenu.bind(this);
    this.handleSideMenu = this.handleSideMenu.bind(this);
  }

  handleMainMenu = () => {
    this.setState({ mainMenuOpen: !this.state.mainMenuOpen });
  };

  handleSideMenu = () => {
    this.setState({ sideMenuExpanded: !this.state.sideMenuExpanded });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          handleMainMenu={this.handleMainMenu}
          handleSideMenu={this.handleSideMenu}
        />
        <MainMenu
          open={this.state.mainMenuOpen}
          handleMainMenu={this.handleMainMenu}
        />
        <div className="main-content-container">
          <SideMenu expanded={this.state.sideMenuExpanded} />
          <div className="main-content">
            {this.props.children}
            <style jsx global>
              {styles}
            </style>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
