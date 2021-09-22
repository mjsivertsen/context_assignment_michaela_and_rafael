import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
return(
  <Menu inverted color="black">
    <NavLink to="/">
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink to="/UserProfile">
      <Menu.Item>UserProfile</Menu.Item>
    </NavLink>
    <NavLink to="/StuffAboutUser">
      <Menu.Item>Stuff About User</Menu.Item>
    </NavLink>
  </Menu>
  )
}

export default NavBar;