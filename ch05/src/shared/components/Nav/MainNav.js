import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElement/Backdrop";
import "./MainNav.css";

const MainNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerOpenHandler = () => {
    setDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <Fragment>
      {drawerOpen && <Backdrop onClick={drawerCloseHandler}></Backdrop>}
      <SideDrawer show={drawerOpen} close={drawerCloseHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={drawerOpenHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNav;
