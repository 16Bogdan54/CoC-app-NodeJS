import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import HomeVillageClan from "@/pages/myClan/homeVillage/HomeVillageClan";

const MyClan = () => {
  const [status, error] = useClanFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <HomeVillageClan />
    </div>
  );
};

export default MyClan;
