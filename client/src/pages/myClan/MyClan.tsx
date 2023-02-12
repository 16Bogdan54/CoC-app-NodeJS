import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MyClan = () => {
  const [status, error] = useClanFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <h1>My Clan</h1>
    </div>
  );
};

export default MyClan;
