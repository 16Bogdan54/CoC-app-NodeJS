import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const PlayerInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>{player.expLevel}</h1>
      <h1>{player.name}</h1>
      <h1>{player.tag}</h1>
      <h1>{player.role}</h1>
    </div>
  );
};

export default PlayerInfo;
