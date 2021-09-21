import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
return(
  <Menu>
    <NavLink to="/">
    <Menu.Item>Home</Menu.Item>
    </NavLink>

    <NavLink to="/UserProfile">
      <Menu.Item>UserProfile</Menu.Item>
    </NavLink>
    
</Menu>

)


}

export default NavBar;