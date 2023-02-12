import React from "react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div>
      <NavLink className="mx-2.5" to="/my-profile">
        My Profile
      </NavLink>
      <NavLink className="mx-2.5" to="/my-clan">
        My Clan
      </NavLink>
      <NavLink className="mx-2.5" to="/clans">
        Clans
      </NavLink>
      <NavLink className="mx-2.5" to="/profiles">
        Profiles
      </NavLink>
    </div>
  );
};

export default MainNavbar;
