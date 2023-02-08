import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const TroopsList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      {player.troops.map((troop, index) => (
        <div key={index}>
          <h1>{troop.name}</h1>
          <h1>{troop.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default TroopsList;
