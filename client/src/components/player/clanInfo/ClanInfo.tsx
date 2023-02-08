import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const ClanInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>{player.clan?.name}</h1>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </div>
  );
};

export default ClanInfo;
