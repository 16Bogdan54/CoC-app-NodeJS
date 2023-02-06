import React from "react";
import { usePlayerFetch } from "../../../hooks/usePlayerFetch";

const SpellList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      {player.spells.map((spell) => (
        <div>
          <h1>{spell.name}</h1>
          <h1>{spell.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default SpellList;
