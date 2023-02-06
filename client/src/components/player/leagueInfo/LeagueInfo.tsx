import React from "react";
import { usePlayerFetch } from "../../../hooks/usePlayerFetch";

const LeagueInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <div>
        <img width={100} src={player.league.icon.url} alt="league icon" />
        <h1>{player.league.name}</h1>
        <h1>{player.trophies}</h1>
      </div>
      <div>
        <h1>War Stars Won:</h1>
        <h1>{player.warStars}</h1>
      </div>
      <div>
        <h1>All time best:</h1>
        <h1>{player.bestTrophies}</h1>
      </div>
    </div>
  );
};

export default LeagueInfo;
