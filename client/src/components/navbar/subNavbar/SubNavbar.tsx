import React from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div>
      <NavLink className="mx-2.5" to="/myprofile/home-village-profile">
        Home Village
      </NavLink>
      <NavLink className="mx-2.5" to="/myprofile/builder-base-profile">
        Builder Base
      </NavLink>
      <NavLink className="mx-2.5" to="/myprofile/clan-capital-profile">
        Clan Capital
      </NavLink>
    </div>
  );
};

export default SubNavbar;
