import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const BottomInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <div>
        <h1>Troops donated:</h1>
        <h1>{player.donations}</h1>
      </div>
      <div>
        <h1>Troops received</h1>
        <h1>{player.received}</h1>
      </div>
      <div>
        <h1>Attacks Won:</h1>
        <h1>{player.attackWins}</h1>
      </div>
      <div>
        <h1>Defenses Won</h1>
        <h1>{player.defenseWins}</h1>
      </div>
    </div>
  );
};

export default BottomInfo;
