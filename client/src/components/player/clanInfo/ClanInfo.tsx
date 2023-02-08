import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const ClanInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <h1>{player.clan?.name}</h1>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </div>
  );
};

export default ClanInfo;
