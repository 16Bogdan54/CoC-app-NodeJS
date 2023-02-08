import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const SpellList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      {player.spells.map((spell, index) => (
        <div key={index}>
          <h1>{spell.name}</h1>
          <h1>{spell.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default SpellList;
