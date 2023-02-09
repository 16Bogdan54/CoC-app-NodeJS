import React from "react";
import SubNavbar from "@/components/navbar/subNavbar/SubNavbar";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <div>
      <SubNavbar />
      <Outlet />
    </div>
  );
};

export default MyProfile;
