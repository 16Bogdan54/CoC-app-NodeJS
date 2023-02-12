import React from "react";
import { NavLink } from "react-router-dom";

const MyClanSubNavbar = () => {
  return (
    <div>
      <NavLink className="mx-2.5" to="/my-clan">
        Home Village
      </NavLink>
      <NavLink className="mx-2.5" to="/my-clan/builder-base-clan">
        Builder Base
      </NavLink>
      <NavLink className="mx-2.5" to="/my-clan/capital-clan">
        Clan Capital
      </NavLink>
    </div>
  );
};

export default MyClanSubNavbar;
