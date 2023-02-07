import React from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div>
      <NavLink to="/myprofile/home-village-profile">Home Village</NavLink>
      <NavLink to="/myprofile/builder-base-profile">Builder Base</NavLink>
      <NavLink to="/myprofile/clan-capital-profile">Clan Capital</NavLink>
    </div>
  );
};

export default SubNavbar;
