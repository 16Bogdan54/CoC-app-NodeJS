import React from "react";
import { usePlayerFetch } from "../../../hooks/usePlayerFetch";

const HeroesList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      {player.heroes.map((hero) => {
        if (hero.isHomeBase) {
          return (
            <div>
              <h1>{hero.name}</h1>
              <h1>{hero.level}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default HeroesList;
