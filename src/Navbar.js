
import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className="Navbar">
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/soda'>
        Soda
      </NavLink>
      <NavLink exact to='/cookies'>
        Cookies
      </NavLink>
      <NavLink exact to='/crackers'>
        Crackers
      </NavLink>
    </div>
  )
}
export default Navbar;