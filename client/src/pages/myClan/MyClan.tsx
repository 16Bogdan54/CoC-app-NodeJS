import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import MyClanSubNavbar from "@/components/navbar/myClanSubNavbar/MyClanSubNavbar";
import { Outlet } from "react-router-dom";

const MyClan = () => {
  const [status, error] = useClanFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <MyClanSubNavbar />
      <Outlet />
    </div>
  );
};

export default MyClan;
