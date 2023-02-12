import React from "react";
import { NavLink } from "react-router-dom";

const MyProfileSubNavbar = () => {
  return (
    <div>
      <NavLink className="mx-2.5" to="/my-profile">
        Home Village
      </NavLink>
      <NavLink className="mx-2.5" to="/my-profile/builder-base-profile">
        Builder Base
      </NavLink>
      <NavLink className="mx-2.5" to="/my-profile/clan-capital-profile">
        Clan Capital
      </NavLink>
    </div>
  );
};

export default MyProfileSubNavbar;
